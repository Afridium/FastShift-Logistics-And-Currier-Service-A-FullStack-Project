import { Search } from 'lucide-react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { useRef } from 'react';
const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);
    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const coordinates = [district.latitude, district.longitude];
            mapRef.current.flyTo(coordinates, 13);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Location not found",
            });
        }
    }
    return (
        <div className='my-8 bg-white rounded-3xl p-7'>
            <h3 className='mb-7 font-extrabold text-4xl text-(--color-title)'>We are Available in 64 Disctrics</h3>
            <form onSubmit={handleSearch}>
                <div className="join w-full max-w-2xl rounded-full  bg-[#CBD5E1]/30 shadow-sm">
                    <label className="input join-item bg-transparent flex-1 rounded-full border-0 shadow-none focus-within:outline-none">
                        <Search className="opacity-50" size={20} />
                        <input
                            type="text"
                            className="rounded-l-none"
                            placeholder="Search here"
                            name='location'
                        />
                    </label>
                    <input type="submit" className="btn join-item rounded-full bg-(--color-primary) font-bold border-0 px-8" value="Search" />
                </div>
            </form>

            <div className='w-full h-140 mt-16'>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={true}
                    className='h-140'
                    ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map((positions, index) =>
                            <Marker key={index}
                                position={[positions.latitude, positions.longitude]}
                            >
                                <Popup>
                                    District: {positions.district} <br /> Covered Areas: <br /> {positions.covered_area.join(', ')}
                                </Popup>
                            </Marker>)
                    }

                </MapContainer>
            </div>
        </div >

    );
};

export default Coverage;