import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './CategoryCardComp.css';

const CategoryCardComp = ({ to , src , text }) => {
  return (
    <>
      <Link to={ to }>
        <Card body className="text-center cate-card">
          <picture className="picture mb-2">
            <img src={ src }></img>
          </picture>
          <>
            { text }
          </>
        </Card>
      </Link>

    </>
  );
};

export default CategoryCardComp;