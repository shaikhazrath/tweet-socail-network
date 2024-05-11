'use client'
import NavBar from "@/components/NavBar";
import React, { useEffect ,useState,useRef} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import BottomNavBar from "@/components/BottomNavBar";
const Posts = () => {
  const getPosts = async()=>{
    try {
      const token = localStorage.getItem("token");

      const config = {
          headers: {
            Authorization: token,
          },
        };
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/posts`,config); 
    console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
getPosts()
  },[])

  const scrollContainerRef = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const currentScrollPosition = scrollContainerRef.current.scrollTop;
  
  
        if (currentScrollPosition <= scrollValue) {
          setScroll(false);
      setScrollValue(currentScrollPosition);

        } else {
          setScroll(true);
      setScrollValue(currentScrollPosition);

        }
      }
    };
  
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);
  
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollValue,scrollContainerRef]);
  const mockPosts = [
    {
      _id: 1,
      userName: "John Doe",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-01T10:30:00"),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      _id: 2,
      userName: "Jane Smith",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-02T14:45:00"),
      description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
    },
    {
      _id: 3,
      userName: "Bob Johnson",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-03T08:15:00"),
      description:
        "Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus.",
    },
    {
      _id: 4,
      userName: "Sarah Lee",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-04T16:20:00"),
      description:
        "Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      _id: 5,
      userName: "Michael Brown",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-05T12:00:00"),
      description:
        "Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.",
    },
    {
      _id: 6,
      userName: "Emily Davis",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-06T09:30:00"),
      description:
        "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
    },
    {
      _id: 7,
      userName: "Emily Davis",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-06T09:30:00"),
      description:
        "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
    },
    {
      _id: 8,
      userName: "Emily Davis",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-06T09:30:00"),
      description:
        "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
    },
    {
      _id: 9,
      userName: "Emily Davis",
      userAvatar: "https://via.placeholder.com/40",
      postedTime: new Date("2023-05-06T09:30:00"),
      description:
        "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
    },
  ];
  return (
    <div >

      <NavBar />

<BottomNavBar scrolling={scroll}/>
      <div ref={scrollContainerRef} className=" h-screen overflow-scroll ">

        {/* <div className="flex flex-row justify-center items-center px-4 pt-4 gap-3 ">
          <div className="w-full  md:w-1/3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoMdSearch className=" text-black" size={20} />
              </div>
              <Input
                type="text"
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="bg-primary pl-10 pr-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              />
            </div>
          </div>
        
        </div> */}
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {mockPosts.map((post) => (
              <div
                key={post._id}
                className="bg-foreground rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-4 flex">
                  <Avatar className="mr-4 w-10 h-10">
                    <AvatarImage src={post.userAvatar} alt={post.userName} />
                    <AvatarFallback>{post.userName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <h3 className="text-white font-semibold mr-2">
                          {post.userName}
                        </h3>
                        <span className="text-sm text-gray-400">
                          {post.postedTime.toLocaleString()}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-white transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-300">{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
