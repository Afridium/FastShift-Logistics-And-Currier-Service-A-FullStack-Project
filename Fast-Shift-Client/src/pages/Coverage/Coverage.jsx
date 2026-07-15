import { Search } from 'lucide-react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
const Coverage = () => {
    const position = [23.6850, 90.3563];
    return (
        <div className='my-8 bg-white rounded-3xl p-7'>
            <h3 className='mb-7 font-extrabold text-4xl text-(--color-title)'>We are Available in 64 Disctrics</h3>
            <div className="join w-full max-w-2xl rounded-full  bg-[#CBD5E1]/30 shadow-sm">
                <label className="input join-item bg-transparent flex-1 rounded-full border-0 shadow-none focus-within:outline-none">
                    <Search className="opacity-50" size={20} />
                    <input
                        type="text"
                        className="rounded-l-none"
                        placeholder="Search here"
                    />
                </label>
                <button className="btn join-item rounded-full bg-(--color-primary) font-bold border-0 px-8">
                    Search
                </button>
            </div>
            <div className='w-full h-140 mt-16'>
                <MapContainer 
                center={position} 
                zoom={7} 
                scrollWheelZoom={true}
                className='h-140'
                >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        </div >

    );
};

export default Coverage;