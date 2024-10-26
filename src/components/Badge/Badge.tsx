"use client";
import './Badge.css';

export default function Badge({ name, role, image, link, linkedInLink }: { name: string, role: string, image: string, link: string, linkedInLink: string }) {
    return (
        <div className="column">
            <a className="badge" href={linkedInLink}>
                <img src={image} alt={name} />
            </a>
            <div className="bg-navy flex justify-center items-center">
                <button onClick={() => window.open(link)} className="button-badge text-white font-bold py-1 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-sm">
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