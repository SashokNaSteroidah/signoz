import { Col, Tag as AntDTag } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
	min-height: 78vh;
	display: flex;
	flex-direction: column;
	overflow-y: hidden;
`;

export const RightContainerWrapper = styled(Col)`
	&&& {
		min-width: 330px;
		overflow-y: auto;
		max-width: 400px;
		width: 30%;
	}
	&::-webkit-scrollbar {
		width: 0rem;
	}
`;

interface LeftContainerWrapperProps {
	isDarkMode: boolean;
}

export const LeftContainerWrapper = styled(Col)<LeftContainerWrapperProps>`
	&&& {
		min-width: 70%;
		overflow-y: auto;
		border-right: ${({ isDarkMode }): string =>
			isDarkMode
				? '1px solid var(--bg-slate-300)'
				: '1px solid var(--bg-vanilla-300)'};
	}
	&::-webkit-scrollbar {
		width: 0rem;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 8px;
	margin-bottom: 1rem;
	justify-content: flex-end;
`;

export const PanelContainer = styled.div`
	display: flex;
	overflow-y: auto;
`;

export const Tag = styled(AntDTag)`
	margin: 0;
`;
