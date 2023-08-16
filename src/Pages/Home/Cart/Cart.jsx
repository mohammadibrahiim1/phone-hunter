import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { removeFromCart } from "../../../features/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div>
      <p className="text-center"> products in cart : {cart.length}</p>
      <div>
        <div className="d-flex gap-5 justify-content-center align-items-center ">
          {cart ? (
            cart
              // .sort((a, b) => a.cartPosition - b.cartPosition)
              .map((product) => (
                <>
                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section component="a" href="https://mantine.dev/">
                      <Image src={product.image} height={160} alt="Norway" />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                      <Text weight={500}>{product.model}</Text>
                      <Badge color="pink" variant="light">
                        ${product.price}
                      </Badge>
                      <Badge color="pink" variant="light">
                        quantity: {product.quantity}
                      </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                      {product.keyFeature.map((keyfeature) => (
                        <>
                          <p>{keyfeature}</p>
                        </>
                      ))}
                    </Text>

                    <Button
                      onClick={() => dispatch(removeFromCart(product))}
                      variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                    >
                      delete
                    </Button>
                  </Card>
                </>
              ))
          ) : (
            <Text c={"red"} fw={700} align="center">
              no product found
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
