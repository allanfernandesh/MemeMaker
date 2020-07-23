import React, { useState, useEffect } from 'react';
import qs from 'qs';

import { Wrapper, Card, Templates, Form, Button } from './styles';
import logo from '../../images/logo.svg'

export default function Home() {
    const [templates, setTemplates] = useState([]);
    const [selectdTemplate, setSelectdTemplate] = useState(null);
    const [boxes, setBoxes] = useState([]);
    const [generetedMeme, setGeneretedMeme] = useState(null)

    useEffect(() => {
        (async () => {
            const resp = await fetch('https://api.imgflip.com/get_memes');
            const { data: { memes } } = await resp.json();
            setTemplates(memes);
        })()
    }, []);

    const handleInputChange = index => e => {
        const newValues = boxes;
        newValues[index] = e.target.value;
        setBoxes(newValues);
    };

    function handleSelectTemplate(template) {
        setSelectdTemplate(template);
        setBoxes([]);
    }

    async function handleSumit(e) {
        e.preventDefault();

        const params = qs.stringify({
            template_id: selectdTemplate.id,
            username: 'AlanFernandesH',
            password: '123456',
            boxes: boxes.map(text => ({ text })),
        });

        const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);
        const { data: { url } } = await resp.json();
        setGeneretedMeme(url);
    }

    function handleReset() {
        setSelectdTemplate(null);
        setBoxes([]);
        setGeneretedMeme(null);
    }

    return (
        <Wrapper>
            <img src={logo} alt="MemeMaker" />
            <Card>
                {generetedMeme && (
                    <>
                        <img src={generetedMeme} alt="Genereted Meme" />
                        <Button type="button" onClick={handleReset}>Criar outro meme</Button>
                    </>
                )}
                {!generetedMeme && (
                    <>
                        <h2>Selecione o template</h2>
                        <Templates>
                            {templates.map(template => (
                                <button
                                    key={template.id}
                                    type="button"
                                    onClick={() => handleSelectTemplate(template)}
                                    className={template.id === selectdTemplate?.id ? 'selected' : ''}
                                >
                                    <img src={template.url} alt={template.name} />
                                </button>
                            ))}
                        </Templates>
                        <h2>Textos</h2>
                        {selectdTemplate && (
                            <>
                                <Form onSubmit={handleSumit}>
                                    {(new Array(selectdTemplate.box_count)).fill('').map((_, index) => (
                                        <input
                                            key={String(Math.random())}
                                            placeholder={`Text #${index + 1}`}
                                            onChange={handleInputChange(index)}
                                        />
                                    ))}

                                    <Button type="submit">MakeMyMeme!</Button>
                                </Form>
                            </>
                        )}
                    </>
                )}
            </Card>
        </Wrapper>
    );
}