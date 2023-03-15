import { StyledButtonFilled, StyledButtonOutlined } from '../../styles/Button';
import { StyledHeader, StyledHeaderContainer } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
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
                    <Dialog.Portal>
                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </StyledHeader>
        </StyledHeaderContainer>
    )
}