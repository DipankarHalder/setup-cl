import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout(props) {
  return (
    <Fragment>
      <Head>
        <meta name='keywords' content={props.keywords} />
        <meta name='description' content={props.description} />
        <title>{props.title}</title>
      </Head>
      <div className="app-content-full">
        <Header />
        <div className="app-content-full">
          {props.children}
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

Layout.defaultProps = { 
  title: 'Calcify || Home',
  keywords: 'Calcify, Health application, E-comm application',
  description: 'Its a health related web based application for all kind of users'
}