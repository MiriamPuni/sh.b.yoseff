import React from 'react';
import styles from './style.module.css';

function Home() {
  const lions = [
    {
      id: 1,
      name: 'African Lion',
      description: 'The African lion is the most social of all big cats and lives in groups called prides.',
      price: 200,
      image: './1.jpg',
    },
    {
      id: 2,
      name: 'White Lion',
      description: 'The white lion is a rare color mutation of the lion. They are not albino; they have leucism.',
      price: 250,
      image: './2.jpg',
    },
    {
      id: 3,
      name: 'Golden Lion',
      description: 'The golden lion is known for its majestic appearance and rare golden fur.',
      price: 300,
      image: './3.jpg',
    },
    {
      id: 4,
      name: 'Snow Lion',
      description: 'The snow lion is adapted to cold environments and has a beautiful white coat.',
      price: 280,
      image: './4.jpg',
    },
  ];

  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to the Lion Store</h1>
        <p className={styles.heroSubtitle}>Discover the majestic world of lions and bring their essence to your home.</p>
      </section>
      <section className={styles.container}>
        <h2 className={styles.heading}>Featured Lions</h2>
        <ul className={styles.lionList}>
          {lions.map((lion) => (
            <li key={lion.id} className={styles.lionCard}>
              <div>
                <img src={lion.image} alt={lion.name} />
                <h3 >{lion.name}</h3>
                <p className={styles.lionDescription}>{lion.description}</p>
              </div>
              <div>
                <p className={styles.price}>Price: ${lion.price}</p>
                <button className={styles.addToCart}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.container}>
        <h2 className={styles.heading}>About Us</h2>
        <p className={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, sapien at semper
          facilisis, erat turpis hendrerit quam, vel bibendum velit velit non dolor. Sed in purus vel urna
          rhoncus accumsan.
        </p>
        <p className={styles.aboutText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique blanditiis nostrum saepe possimus harum sequi natus, temporibus delectus distinctio sunt esse veniam. Fuga tenetur cupiditate quam eius quibusdam voluptate, et delectus laboriosam odit ex tempora dicta illum repellat sequi earum placeat, facere quos natus nostrum suscipit nesciunt maiores laborum. Architecto necessitatibus dolorem consequuntur magnam tempora ab provident assumenda repudiandae rerum.
        </p>
      </section>
    </div>
  );
}

export default Home;
