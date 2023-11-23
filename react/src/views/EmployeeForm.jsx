import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { useParams, useNavigate } from "react-router-dom";

export default function EmployeeForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [employee, setEmployee] = useState({
        id: null,
        name: "",
        job_title: "",
        phone: "",
        date_of_hire: "",
        date_of_birth: "",
        address: "",
        email: "",
    });

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get(`/employees/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setEmployee(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (employee.id) {
            axiosClient
                .put(`/employees/${employee.id}`, employee)
                .then(({ data }) => {
                    navigate("/employees");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
            return;
        } else {
            axiosClient
                .post(`/employees`, employee)
                .then(({ data }) => {
                    navigate("/employees");
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
            {employee.id && <h1>Güncellenen Çalışan {employee.name} </h1>}
            {!employee.id && <h1>Yeni Çalışan</h1>}
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
                        placeholder="Çalışan Adı"
                        value={employee.name}
                        onChange={(ev) =>
                            setEmployee({ ...employee, name: ev.target.value })
                        }
                    />
                    <input
                        placeholder="İş Tanımı"
                        value={employee.job_title}
                        onChange={(ev) =>
                            setEmployee({
                                ...employee,
                                job_title: ev.target.value,
                            })
                        }
                    />
                    <input
                        placeholder="Telefon"
                        value={employee.phone}
                        onChange={(ev) =>
                            setEmployee({
                                ...employee,
                                phone: ev.target.value,
                            })
                        }
                    />
                    <input
                        type="date"
                        placeholder="İşe Alınma Tarihi"
                        value={employee.date_of_hire}
                        onChange={(ev) =>
                            setEmployee({ ...employee, date_of_hire: ev.target.value })
                        }
                    />
                    <input
                        type="date"
                        placeholder="Doğum Tarihi"
                        value={employee.date_of_birth}
                        onChange={(ev) =>
                            setEmployee({
                                ...employee,
                                date_of_birth: ev.target.value,
                            })
                        }
                    />
                    <input
                        placeholder="Adres"
                        value={employee.address}
                        onChange={(ev) =>
                            setEmployee({
                                ...employee,
                                address: ev.target.value,
                            })
                        }
                    />
                     <input
                        placeholder="Email"
                        value={employee.email}
                        onChange={(ev) =>
                            setEmployee({
                                ...employee,
                                email: ev.target.value,
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
