import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = ({ API_ENDPOINT }) => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // NEW

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(API_ENDPOINT);
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchCountries();
    }, [API_ENDPOINT]);

    // Filtered list based on search
    const filteredCountries = countries?.filter((country) =>
        country?.common?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Search Bar */}
            <div style={{ textAlign: "center", margin: "20px 0" }}>
                <input
                    type="text"
                    placeholder="Search country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "300px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>

            {/* Countries List */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                }}
            >
                {filteredCountries?.map((country) => (
                    <div key={country.common} className="countryCard">
                        <CountryCard country={country} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Countries;
