import { StyledButtonFilled, StyledButtonOutlined } from '../../styles/Button';
import { StyledHeader, StyledHeaderContainer } from './styles';
export default function Header() {
    return (
        <StyledHeaderContainer>
            <StyledHeader>
                <div>
                    Money Manager
                </div>
                <StyledButtonFilled title="Criar nova transação">
                    Nova Transação
                </StyledButtonFilled>
            </StyledHeader>
        </StyledHeaderContainer>
    )
}