import React from 'react';
import styles from './App.module.css';

function List() {
  return (
    <div className={styles.app}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Abel</td>
            <td>Agoi</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Muyiwa</td>
            <td>Aregbesola</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Opeyemi</td>
            <td>Agoi</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ope</td>
            <td>Aina</td>
          </tr>
        </tbody>
      </table>


      <div className={styles.pagination}>
        <span>&laquo;</span>
        <span className={styles.active}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
    </div>
  );
}
export default List;
