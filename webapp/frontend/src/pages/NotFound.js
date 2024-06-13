import React from 'react';

const NotFound = () => {
    return (
        <div className="container">
            <div className="alert alert-danger" role="alert" style={{marginTop: "2%", marginBottom: "47%"}}>
            <h1>Error 404 Not Found :(</h1>
            <p>The page you are looking for does not exist.</p>
            </div>
        </div>

    );
}

export default NotFound;