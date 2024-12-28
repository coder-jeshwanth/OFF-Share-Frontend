import 'bootstrap/dist/css/bootstrap.min.css';

const FileList = ({ files, onPreview, onPrint }) => {
    // Check if the files object is empty.
    if (Object.keys(files).length === 0) {
        return (
            <div className="text-center mt-4">
                <p className="text-muted fs-5">No files available.</p>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {Object.entries(files).map(([username, userFiles]) => (
                    <div
                        key={username}
                        className="card shadow-sm"
                        style={{
                            flex: '1 1 calc(30% - 1rem)', // Make card responsive and limit max width to 30%
                            maxWidth: '30%',
                            minWidth: '280px', // Prevent cards from shrinking too much on smaller screens
                        }}
                    >
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">{username}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            {/* Safeguard to ensure userFiles is an array */}
                            {Array.isArray(userFiles) ? (
                                userFiles.map((file) => (
                                    <li
                                        key={file.id}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        <span className="fw-semibold fs-6">{file.fileName}</span>
                                        <div className="btn-group">
                                            <button
                                                onClick={() => onPreview(file.id, file.fileName)}
                                                className="btn btn-success btn-sm"
                                            >
                                                Preview
                                            </button>
                                            <button
                                                onClick={() => onPrint(file.id, file.fileName)}
                                                className="btn btn-primary btn-sm"
                                            >
                                                Print
                                            </button>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="list-group-item text-muted">
                                    No files found for this user.
                                </li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileList;