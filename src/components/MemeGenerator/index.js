import {Component} from 'react'

import {
  MainContainer,
  FormContainer,
  MemeContainer,
  Heading,
  Label,
  Input,
  Select,
  Options,
  Button,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isGenerated: false,
  }

  generateMeme = e => {
    e.preventDefault()
    this.setState({isGenerated: true})
  }

  onChangeImageUrl = e => {
    this.setState({imageUrl: e.target.value})
  }

  onChangeTopText = e => {
    this.setState({topText: e.target.value})
  }

  onChangeBottomText = e => {
    this.setState({bottomText: e.target.value})
  }

  onChangeFontSize = e => {
    this.setState({fontSize: parseInt(e.target.value)})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isGenerated} = this.state
    return (
      <MainContainer>
        <>
          <FormContainer onSubmit={this.generateMeme}>
            <Heading>Meme Generator</Heading>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              placeholder="Enter the image URL"
              value={imageUrl}
              onChange={this.onChangeImageUrl}
            />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              id="topText"
              placeholder="Enter the Top Text"
              value={topText}
              onChange={this.onChangeTopText}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              id="bottomText"
              placeholder="Enter the Bottom Text"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
            <Label htmlFor="fontSize">Font Size</Label>
            <Select
              id="fontSize"
              value={fontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(item => (
                <Options
                  fontSize={fontSize}
                  value={item.optionId}
                  key={item.optionId}
                >
                  {item.displayText}
                </Options>
              ))}
            </Select>
            <Button type="submit">Generate</Button>
          </FormContainer>
        </>
        <>
          {isGenerated && (
            <MemeContainer bgImage={imageUrl} data-testid="meme">
              <Para fontSizee={fontSize}>{topText}</Para>
              <Para fontSizee={fontSize}>{bottomText}</Para>
            </MemeContainer>
          )}
        </>
      </MainContainer>
    )
  }
}
export default MemeGenerator
