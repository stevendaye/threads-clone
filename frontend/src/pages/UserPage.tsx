import { UserHeader, UserPost } from "../components";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={745}
        replies={446}
        postImg="/post1.png"
        postTitle="Let's dig in"
      />
      <UserPost
        likes={415}
        replies={519}
        postImg="/post2.jpg"
        postTitle="We are making good progress"
      />
      <UserPost
        likes={991}
        replies={601}
        postImg="/post3.png"
        postTitle="This is Lit"
      />
      <UserPost
        likes={309}
        replies={187}
        postImg="/post4.jpg"
        postTitle="Join us for something revolutionary"
      />
      <UserPost
        likes={903}
        replies={981}
        postTitle="Believing in something is the first step that get you started. Keep believing is what gets you going. Let's not quench the fire Do you agree?"
      />
    </>
  );
};

export default UserPage;
