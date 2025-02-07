import React, { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  jobTitle: string;
  street: string;
  city: string;
  latitude: number;
  longitude: number;
  favouriteColour: string;
  profileImage: string;
}

function UsersSection() {
  const url = "https://boolean-uk-api-server.fly.dev/martvu/contact";
  const [userData, setUserData] = useState<Contact[]>([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(userData);
  return (
    <section>
      <h2>Users Section</h2>
      <UsersList userData={userData} />
    </section>
  );
}

export default UsersSection;
