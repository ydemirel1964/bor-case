import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { useParams, useNavigate } from "react-router-dom";
export default function VehicleForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [vehicle, setVehicle] = useState({
        id: null,
        model: "",
        year: "",
        license_plate: "",
        color: "",
        date_of_purchase: "",
        employee_id: "",
    });

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get(`/vehicles/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setVehicle(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (vehicle.id) {
            axiosClient
                .put(`/vehicles/${vehicle.id}`, vehicle)
                .then(({ data }) => {
                    navigate("/vehicles");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
            return;
        }else
        {
            axiosClient
                .post(`/vehicles`, vehicle)
                .then(({ data }) => {
                    navigate("/vehicles");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
            return;
        }
    };

    return (
        <div>
            {vehicle.id && <h1>Güncellenen Araç {vehicle.license_plate} </h1>}
            {!vehicle.id && <h1>Yeni Araç</h1>}
            <div className="card animated fadeInDown">
                {errors && (
                    <div className="alert alert-danger">
                        {Object.keys(errors).map((key) => (
                            <div key={key}>{errors[key]}</div>
                        ))}
                    </div>
                )}
                <form onSubmit={onSubmit}>
                    <input
                        placeholder="Model"
                        value={vehicle.model}
                        onChange={(ev) =>
                            setVehicle({ ...vehicle, model: ev.target.value })
                        }
                    />
                    <input
                        placeholder="Yıl"
                        value={vehicle.year}
                        onChange={(ev) =>
                            setVehicle({ ...vehicle, year: ev.target.value })
                        }
                    />
                    <input
                        placeholder="Plaka"
                        value={vehicle.license_plate}
                        onChange={(ev) =>
                            setVehicle({
                                ...vehicle,
                                license_plate: ev.target.value,
                            })
                        }
                    />
                    <input
                        placeholder="Renk"
                        value={vehicle.color}
                        onChange={(ev) =>
                            setVehicle({ ...vehicle, color: ev.target.value })
                        }
                    />
                    <input type="date"
                        placeholder="Satın Alınma Tarihi"
                        value={vehicle.date_of_purchase}
                        onChange={(ev) =>
                            setVehicle({
                                ...vehicle,
                                date_of_purchase: ev.target.value,
                            })
                        }
                    />
                    <input
                        placeholder="Kayıtlı Kişi"
                        value={vehicle.employee_id}
                        onChange={(ev) =>
                            setVehicle({
                                ...vehicle,
                                employee_id: ev.target.value,
                            })
                        }
                    />
                    <button type="submit" className="btn btn-primary">
                        Kaydet
                    </button>
                </form>
            </div>
        </div>
    );
}
