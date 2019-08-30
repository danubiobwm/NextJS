import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalycs from '~/hocs/withAnalytics';

const Title = styled.h1`
  color:#069;
  font-size:40px;
`;

const Home = () =>(
  <div>
 <Head>
 <title>Home</title>
 </Head>
  <img src="/static/img.jpeg" width="200" alt="urso"/>
    <Title>Hello world</Title>

  <Link href='/users'><a>Usuários</a></Link>

  </div>

);

export default withAnalycs()(Home);