import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoComments from './PhotoComments';

export function PhotoContent({ data }) {
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            {photo.idade > 1 ? (
              <li>{photo.idade} anos</li>
            ) : (
              <li>{photo.idade} ano</li>
            )}
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}
