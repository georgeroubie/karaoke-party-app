import styled from 'styled-components';

const Wrapper = styled.form`
  display: inline-block;
  margin-left: ${({ theme: { spacing } }) => spacing.small};
`;

const Input = styled.input``;

const Image = styled.img``;

const Paypal = () => {
  return (
    <Wrapper action="https://www.paypal.com/donate" method="post" target="_top">
      <Input type="hidden" name="hosted_button_id" value="FA7AF4NJTZVEG" />
      <Input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <Image alt="" border="0" src="https://www.paypal.com/en_GR/i/scr/pixel.gif" width="1" height="1" />
    </Wrapper>
  );
};

export default Paypal;
