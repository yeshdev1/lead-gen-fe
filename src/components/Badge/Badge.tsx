"use client";
import './Badge.css';

export default function Badge({ name, role, image, link }: { name: string, role: string, image: string, link: string }) {
    return (
        <div className="column">
            <div className="badge">
                <img src={image} alt={name} />
            </div>
            <div className="bg-navy flex justify-center items-center">
                <button onClick={() => window.open(link)} className="bg-green-500 text-white font-bold py-1 px-4 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 text-sm">
                    Book Appointment
                </button>
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p>{role}</p>
            </div>
        </div>
    );
}