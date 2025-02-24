import styled from '@emotion/styled';

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 120px;

  @media (max-width: 480px) {
    justify-content: start;
    width: 70px;
    gap: 5px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: auto;
  color: var(--color-grey);
`;
