// src/components/HostInfo.jsx
import React from 'react';

function HostInfo({ host }) {
    return (
        <div className='host'>
            <div className='infos_prop'>
                <div className='title_name'>{host?.name}</div>
                <div className='avatar'>
                    {host?.picture && <img src={host.picture} alt={host.name} />}
                </div>
            </div>
        </div>
    );
}

export default HostInfo;
