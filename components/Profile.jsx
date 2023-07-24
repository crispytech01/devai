import DigestCard from "./DigestCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((digest) => (
          <DigestCard
            key={digest._id}
            digest={digest}
            handleEdit={() => handleEdit && handleEdit(digest)}
            handleDelete={() => handleDelete && handleDelete(digest)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;