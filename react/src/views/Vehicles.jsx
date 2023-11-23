import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { Link } from "react-router-dom";

export default function Vehicles() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getVehicles();
    }, []);

    const onDelete = (vehicle) => {
        if (!window.confirm("Silmek istediğinize emin misiniz?")) {
            return;
        }
        setLoading(true);
        axiosClient
            .delete(`/vehicles/${vehicle.id}`)
            .then(({ data }) => {
                setLoading(false);
                getVehicles();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getVehicles = () => {
        setLoading(true);
        axiosClient
            .get("/vehicles")
            .then(({ data }) => {
                setLoading(false);
                setVehicles(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1>Araçlar</h1>
                <Link to="/vehicles/new" className="btn-add">
                    Yeni Araç Ekle
                </Link>
            </div>
            <div className="card-animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Model</th>
                            <th>Yıl</th>
                            <th>Plaka</th>
                            <th>Renk</th>
                            <th>Satın Alınma Tarihi</th>
                            <th>Kayıtlı Kişi</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((vehicle) => (
                            <tr key={vehicle.id}>
                                <td>{vehicle.id}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.year}</td>
                                <td>{vehicle.license_plate}</td>
                                <td>{vehicle.color}</td>
                                <td>{vehicle.date_of_purchase}</td>
                                <th>{vehicle.employee_id}</th>
                                <td>
                                    <Link
                                        to={`/vehicles/${vehicle.id}`}
                                        className="btn-edit"
                                    >
                                        Düzenle
                                    </Link>
                                    <button
                                        onClick={(ev) => onDelete(vehicle)}
                                        className="btn-delete"
                                    >
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
