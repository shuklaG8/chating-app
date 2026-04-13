import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
    const {selectedUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8000/api/v1/messages/${selectedUser?._id}`);
                dispatch(setMessages(res.data.messages));
            } catch (error) {
                console.log(error);
            }
        };

        fetchMessages();
    }, [selectedUser?._id, dispatch]);
};

export default useGetMessages;