import em_img from "../gif/empty.gif";

export const EmptyItem = () => {
    return (
        <div className="empty-item">
            <div>
                <img src={em_img} alt="img" width={450} height={450} />
                <p>No result found</p>
            </div>
        </div>
    )
}