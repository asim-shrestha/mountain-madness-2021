import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { $axios } from '../plugins/axios';
import Meme from './Meme'

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState("http://i.imgflip.com/1bij.jpg");

  const handleChange = (e, setText) => {
    setText(e.target.value);
  };

  async function submit() {
      const payload = { template_id: 1, top_text: topText, bottom_text: bottomText}
      await ((await $axios.post('/meme', payload)).data);
  }

  return (
    <>
      <h1>MEME GENERATOR</h1>
      <Meme image={image} topText={topText} bottomText={bottomText}/>
      <Form>
        <Form.Control
          type="text"
          placeholder="Top text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          />
        <Form.Control
          type="text"
          placeholder="Bottom text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          />
        <Button variant="primary" onClick={() => submit()}>Create</Button>
      </Form>
    </>
  );
};

export default MemeGenerator;
