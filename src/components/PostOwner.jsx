export const PostOwner = ({ userImagePost, UserNamePost, Post, Like }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={userImagePost}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">{UserNamePost}</span>
      </div>

      <span className="text-white">{Post}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>{Like}</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
