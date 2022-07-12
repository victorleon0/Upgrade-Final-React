import ProfileForm from "../components/ExperiencesAdmin/ExperienceForm/ExperienceForm";

const PostExperience = () => {
  return (
    <div>
      <ProfileForm onSubmit={this.addExperience} onClick={"/admin/manageexperiences"} />
    </div>
  );
};

export default PostExperience;
