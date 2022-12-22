import { PlayCircleOutlined, VerticalRightOutlined } from "@ant-design/icons";
import { Button, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link, useParams } from "react-router-dom";

const AboutPage = () => {
  let id = useParams();
  console.log(id);
  return (
    <div>
      {/* <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card> */}
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <Button type="primary" ghost>
        Primary
      </Button>
      <VerticalRightOutlined />
      <PlayCircleOutlined spin style={{ color: "red" }} />
      <Link to={'15'}>Link</Link>
    </div>
  );
};

export default AboutPage;
