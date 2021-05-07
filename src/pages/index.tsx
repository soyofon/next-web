import React from 'react';
import useService from '../hooks/service';
import { userModule } from '../services/modules/users';
import { Button } from '@material-ui/core';

const IndexPage = () => {
  const { data: users = [], mutate: loadUsers } = useService(
    userModule.GET_USERS
  );
  const { loading: postLoad, mutate: addUser } = useService(
    userModule.POST_ADD_USER
  );

  const [name, setName] = React.useState('');

  React.useEffect(() => {
    loadUsers();
  }, []);

  React.useEffect(() => {
    if (!postLoad) {
      loadUsers();
    }
  }, [postLoad]);

  return (
    <main>
      <h1>Hello Next.js 👋</h1>
      <label htmlFor="name">
        姓名：
        <input
          id="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <Button
        onClick={() => {
          addUser({ name });
        }}
      >
        ADD USER
      </Button>
      <hr />
      {users.map((item: any) => {
        return (
          <div key={item.id}>
            <div>ID: {item.id}</div>
            <div>Name: {item.name}</div>
          </div>
        );
      })}
    </main>
  );
};

export default IndexPage;
