import React from 'react';
import Axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';
import withAnalycs from '~/hocs/withAnalytics';

const User = ({users}) =>(

<div>
  <Head>
    <title>Users</title>
  </Head>
  <ul>
      {users.map(user=>(
      <li key={user.id}> 
      <Link href={`/users/${user.login}`}>
      <a> { user.login } </a>
      </Link> 
      </li>
      ))}
  </ul>
  <Link href='/'><a>Voltar</a></Link>
</div>

);
User.getInitialProps= async ()=>{
  const response= await Axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );

  console.log(response.data);
  return { users:response.data };
}

export default withAnalycs()(User);