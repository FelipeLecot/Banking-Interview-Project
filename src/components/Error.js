import React from 'react'

export function Error() {
    return (
        <div className="custom-card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <h1>¡¡Error!!</h1>
                <hr/>
                <h3><a href='/'>🔙 to Create Account</a></h3>
            </div>
        </div>
    );
};