import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Rating from "../component/ratings/Rating";
import { useParams } from "react-router-dom";
import Message from "../component/message/Message";
import Loader from "../component/loader/Loader";
import { listProductDetails } from "../actions/productActions";
const ProductScreen = () => {
  const id = useParams();

  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  // const { loading, error, products } = productDeatils;
  let { Loading, error, product } = productDetail;
  if (product?.data) {
    product = product.data;
  }
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row>
            <Col md="6">
              <Image src={product.productImage} alt={product.title} fluid />
            </Col>
            <Col md="3">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description:{product.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description:{product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>{product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "in Stock" : "Out-Of-Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductScreen;
