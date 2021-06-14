import React, {Fragment} from 'react';

import BlogTitle from '../../ui/blog/BlogTitle';

export default function Blog(){
    return(
        <Fragment>
            <section id="blog">
                <div className="container">
                    <BlogTitle/>
                <div className="row mt-5">
                    <div className="col-12 col-md-4 mb-4">
                    <div className="blogImg"></div>
                    <div className="blogText">
                        <p className="blogTitle">다람쥐 블로그</p>
                        <p className="blogAuth">by Admin</p>
                    </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                    <div className="blogImg"></div>
                    <div className="blogText">
                        <p className="blogTitle">다람쥐 블로그</p>
                        <p className="blogAuth">by Admin</p>
                    </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                    <div className="blogImg"></div>
                    <div className="blogText">
                        <p className="blogTitle">다람쥐 블로그</p>
                        <p className="blogAuth">by Admin</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </Fragment>
    )
}