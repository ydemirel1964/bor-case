import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { Link } from "react-router-dom";

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getEmployees();
    }, []);

    const onDelete = (employee) => {
        if (!window.confirm("Silmek istediğinize emin misiniz?")) {
            return;
        }
        setLoading(true);
        axiosClient
            .delete(`/employees/${employee.id}`)
            .then(({ data }) => {
                setLoading(false);
                getEmployees();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getEmployees = () => {
        setLoading(true);
        axiosClient
            .get("/employees")
            .then(({ data }) => {
                setLoading(false);
                setEmployees(data.data);
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
                <h1>Çalışanlar</h1>
                <Link to="/employees/new" className="btn-add">
                    Yeni Çalışan Ekle
                </Link>
            </div>
            <div className="card-animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Çalışan Adı</th>
                            <th>İş Tanımı</th>
                            <th>Telefon</th>
                            <th>İşe Alınma Tarihi</th>
                            <th>Doğum Tarihi</th>
                            <th>Adres</th>
                            <th>Email</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.job_title}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.date_of_hire}</td>
                                <td>{employee.date_of_birth}</td>
                                <td>{employee.address}</td>
                                <th>{employee.email}</th>
                                <td>
                                    <Link
                                        to={`/employees/${employee.id}`}
                                        className="btn-edit"
                                    >
                                        Düzenle
                                    </Link>
                                    <button
                                        onClick={(ev) => onDelete(employee)}
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
