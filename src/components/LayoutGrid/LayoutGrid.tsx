import './LayoutGrid.css';

export default function LayoutGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="container">
            {children}
        </div>
    );
}