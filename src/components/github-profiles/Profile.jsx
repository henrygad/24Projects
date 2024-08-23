const Profile = ({ profile, loading }) => {
    const {
        login,
        name,
        avatar_url,
        url,
        bio,
        created_at,
        updated_at
    } = profile;

    return <div className="p-2 border border-blue-600">
        {!loading ?
            <div>
                {
                    Object.keys(profile).length ?
                        <div className=" flex flex-col items-center space-y-3" >
                            <a href={`https://github.com/${login}`} className="text-blue-600">Visit Author: {login}</a>
                            <h3>{name}</h3>
                            <img
                                src={avatar_url}
                                alt={name}
                                className="h-14 w-14 rounded-full border"
                            />
                            <p>{bio}</p>
                            <div className="">
                                Joined: {created_at}
                            </div>
                        </div> :
                        <div className="text-center">no profile found</div>
                }
            </div > :
            <div className="text-center">loading...</div>
        }
    </div>
};

export default Profile;
