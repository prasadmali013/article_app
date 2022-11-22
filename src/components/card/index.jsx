import React from "react";
import styles from "./index.module.css";


const Card = ({ title, author, category, date, excerpt, feturedImg, tags, articleUrl }) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p><b>Written by:</b>{author} | <b>Category:</b> {category} | <b>Published on:</b> {date}</p>

            <div className={styles.content}>
                <img src={feturedImg} width="18%" alt="article-img" />
                <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
            </div>

            <div className={styles.actionContainer}>
                <h4>Tags:</h4>
                <div className={styles.tagsContainer}>
                    {/* <p>Technology</p>
                <p>science</p>
                <p>Robotics</p> */}

                    
                    {tags.map((tag) => {
                        return(
                            <p>{tag}</p>
                        )
                    })}
                    

                </div>

                <a href={articleUrl} target="_blank" rel="noreferrer noopener">Read More</a>
            </div>


        </div>

    )

}

export default Card;