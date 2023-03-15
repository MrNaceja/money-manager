import { StyledButtonFilled, StyledButtonOutlined } from '../../styles/Button';
import { StyledHeader, StyledHeaderContainer } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import ModalTransaction from '../ModalTransaction';
export default function Header() {
    return (
        <StyledHeaderContainer>
            <StyledHeader>
                <div>
                    Money Manager
                </div>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <StyledButtonFilled title="Criar nova transação">
                            Nova Transação
                        </StyledButtonFilled>
                    </Dialog.Trigger>
                    <ModalTransaction />
                </Dialog.Root>
            </StyledHeader>
        </StyledHeaderContainer>
    )
}