import QRCode from 'react-qr-code';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { useRef, useState } from 'react';

const APP_URL = process.env.ROOT_URL || process.env.REACT_APP_URL;

export default function QR(props) {
  const [isCopied, setIsCopied] = useState(false);
  const target = useRef(null);
  const user = props.user
  const url = `${APP_URL}/profile/${user.id}`

  const handleCopyClicked = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true)
    setTimeout(() => { setIsCopied(false); }, 1000);
  }

  return (
    <Col className='QR-container mb-5'>
      <p>Scan this QR code</p>
      <QRCode value={url} title="test" className='mt-1 mb-3 qr' />
      <p>Or alternatively, share this URL:</p>
      <InputGroup>
        <Form.Control type="text" value={url} readOnly />
        <Button variant="outline-secondary" ref={target} onClick={handleCopyClicked}>
          Copy
        </Button>
        <Overlay target={target.current} show={isCopied} placement="bottom">
          {(props) => (
            <Tooltip {...props}>
              Copied!
            </Tooltip>
          )}
        </Overlay>
      </InputGroup>
    </Col>
  )
}