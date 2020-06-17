import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/user';

type UserState = {
    user: string
};
const HelloUser = () => {
    const dispatch = useDispatch();
    const user = useSelector<UserState>(state => state.user);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(actions.nameChange(e.currentTarget.value));
    return (
        <div className="hello-user">
            Who are you? <br/>
            <input type="text" placeholder="Your name plz"
                onChange={handleChange} /> <br/>
            {user}
        </div>
    )
}


export default HelloUser;
