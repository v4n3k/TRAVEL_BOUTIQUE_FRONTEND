import { useMediaQuery } from '../hooks/useMediaQuery';
import { IconRotatedLogoProps } from '../types';

export const IconRotatedLogo = ({
	rotation = 0,
	width = 68.7,
	mirrorY = false,
	hideable = false,
	top = 'auto',
	right = 'auto',
	bottom = 'auto',
	left = 'auto',
}: IconRotatedLogoProps) => {
	const isHidden = useMediaQuery('(max-width: 1480px)');

	let svgTransform = `rotate(${rotation}deg)`;

	if (mirrorY) {
		svgTransform = `scale(1, -1) ${svgTransform}`;
	}

	const height = width * 1.1;

	const svgStyle: React.CSSProperties = {
		position: 'absolute',
		aspectRatio: width / height,
		transform: svgTransform,
		width: width,
		top: top,
		right: right,
		bottom: bottom,
		left: left,
	};

	const hidden = isHidden && hideable;

	return (
		<>
			{!hidden && (
				<svg
					width={width}
					height={height}
					viewBox={`0 0 ${width} ${height}`}
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					style={svgStyle}
				>
					<rect
						width={width}
						height={height}
						rx='34.3553'
						fill='url(#pattern0_1133_3016)'
						fillOpacity='0.18'
					/>
					<defs>
						<pattern
							id='pattern0_1133_3016'
							patternContentUnits='objectBoundingBox'
							width='1'
							height='1'
						>
							<use
								xlinkHref='#image0_1133_3016'
								transform='matrix(0.00414938 0 0 0.00376256 0 0.0353244)'
							/>
						</pattern>
						<image
							id='image0_1133_3016'
							width='241'
							height='247'
							preserveAspectRatio='none'
							xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAAD3CAYAAADMkrIUAAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQmwNstZ17uzJ4AIJbJbihANu+wWVLFIQUooiSBgATEBSyk0oURUEAFZREAFVKKyFqsoS4hJIIIhmKAYISQBDDsxgZvIJYSQ5eZmu/eO5/fS/5fn7dM93T3TM++858xUffV93zk9Pd1P97+f/Wnv9ufWUmAYhvuFyXvzt/6dost95oeDc27w3vP3/pyRAmMLdsZh7Z+eS4FhGFhb/tzfOQdY9X/777mf0fuA+wBq55z+zd/3ee8t8Ht9b+/HUGAH8Q3YDoGjCqyAVH+2MrsDoJ1z94Y/gHvn4J1WZwdxJ0Ku2c0wDADW/ll6Hf+Yc+7VnecoUHPgvH7n2NOpu/TiTx/Z/uaRAoHTPsA5xx+Jw3MpZIH5K865L3LOfZdz7rudc3/DdP4Y59wTnHPvGH5POz0vnTsI875AfQ/ceufU9ZTdQVxPq1VbBm5rgTvn+wAQYP5559xfndNR9C4A/1nnnAXzVweuzWHAtzgAPto59xON30X05tm5dIFwO4gbd9aSzQ1wHxgMUVM+B4d9C+fc45xzf9c596sBvFP6qn2Hb+rhu/888+K/c859oHPu8QH4jHOMm0tvBtDi0LuhLCLuDuLabbpQu2BFBrT8kctnztfguojHaz5Pcs7BlXkA9EsaPw7XZtySEujjVaYP9ukJoL33b2r8xo1tvoP4TEsbuO6Dg4FqbBTirDHHyhmbehugain0TkECYFw/U/tSot2vhYPg4UEayVmxZfF+4203iu0gnrHbWl9t4LriphiREE1fEwBiPwmoP9E59yjnHGKqwIvuix669oPey5gY+weNiNQt40K/fk/n3D8KfQvQ2rf6P6L2m7z30qNbvnHxbXcQr7CEBrwPGtF1ESXZ/OixUx5AhJGJZ0wvndJ37TscKhwmGNB6HyQcVP84HBIpcZ29fAg08d7fXTvgm9BuB/GCq1gBXrjWX+q44dEtAbCetUVrDhI9rdbo2pVgfkgmPxyJ23Yvw5kf4L2n3Y1/dhAvsMSV4EX0XAJkiKD8QTdF1O7NEccoxnefERog1lt/c09KC5xILtDR6s3s6Xu896/jg8MwPOymc+YdxB23VgV4+drSOisiNbq0XEtLccQU5bBQywC3hEid+qZ0cStiA+LX28Y3Gcw7iDuBeBgG9N2SzgtXxDe69MPGBsQ8gGlNIK8hUlv6oYdzcFmp5kHe+98PnPgtbrpYvYN4JpyCq+ghBR/vEmJzaeRwRYm2HBxr+I7hwvIXM76lD487nHOfa+bJN62fGnXi5wKhAPPhYBuGAXrcfVOs2TuIS1DI/D6Izvh5CdLIPecAr8ZCAAZiNfojxjPiotd41ubE735lzHu5c+61YXK/HizYmuuTnXP/zzn3AufcT4a2/A5LNj7mu9YgypLf2EE8gboVovOUqKUJIym+QgCGHnTxXDhksaOGBhbEuIQ4QJZ8cD195RVHfkX4yCc75/7jyAffzzn3ygBiXFFEfr3mkrnyDuKG7RWyiRCdSQNMPVhLlxYhG0Z8aGqBzNjQkZd81ubESByfY0D8xorJAfSXhdBOAM2fN8TGsIp+NtFkB3HlMlRwX3o6p/icm4nVjb+xcxZT6ptwRoDFQwDL1OCVypU5NPt059wPOufe2Tn3wsoXGeP3Xb37GwHEiNVw5bsuLYxzB3FhxYPuC/clLXDswUK6NJer3J8nzTA2fbD5SWtyQus31+bEjO8vBwnorZ1zdzYO+JlXoZ0/5Jz7EQAcxGxcVBcTKLKDeGTFKy3P6oGTfWn9r3F/HpvLDcMPSE4gUmzJR0CGC/fMX86N+cOdc89u5MRxX0S7fWkAMr/Dz4wFe/NlhHYQZ7ZFEJ+xPtc8GLIABoajLQIZEZdoKp6lLdWAgT88axi2xImfd1UR5Es6iO8f65wjk0pc+VVbF693EEcQrXAdAVZEVCUc4HOU6MW/CejYIpBl4AJYS+up4sRLhl7alXu78B8sz0+rOXULbQRkmpHj/fIti9c7iM1qBuvzQzOBGzmjFVwOUAgkABkr9Vp+2do9a63Ua+nFHGYcGks+HKAfGQoRYKTqFRGHj50DQX7kP/Dey4215Hya+95BHEgW9F8AbGmCPtcCRsXx0uvc5Pjmxax4QUBeWqQWJ14rfvoDwtwJ7Oil73M4Y/R6vqErASUv25p4vYP4D8PwiLrCAq0H/ZETfUoWjorHqa81wh0r8HtogpUaVQDJYUkOqUSINQxbWKbx+fIoxLKWHqV2cOMfiBqR5vhS7z1/b+K59SAOIjSJC7iQoEcPXy+HgIw7LDRBFr04xJyNo8SIpTmxigNo7nPGPPauRGnafO1Ctggs33FppE0B+VaDeBgGrM8A+M2vkszf2zn3rzv5etlcJK+r0gabrGfy/xxQSKR+unPuEXM6GnmX+aOKqFb1Qp85dCtR+ns7rV1qrO9rdGP9HiDf6b1/w5KTq+n71oJ4GAbEZyUvIPL25pRKQLDroDKyNWuzVBtAjO/zO5xzH7PQR2xe8ZJhqOitzGMJUdqSJsWN+T1JFOjISr5YiJzj3d5KEEcA7iE+56gci9VwvkevFACRGxNi59c559iYhCou9SC6Y9yjjM5Sj7jwZy7sNuOw+IaRSQDks0V43ToQRwDGpzvFeNWyKeVT1jvnFqsR8T9+YRDbgI+lODHAwugEF+xt0IrXFwnqxwqLfjYg3yoQGwAjOiPurhXrzIaLa12d02r9cWFD/mjLadTYVm6mpUDM4fhpzrn3WqGOGFlP1tX0L0Owz1+7yqD6XaMvnwXItwbEBsBzS8M27uVj81i05hfnArJAzJUqXzZ1QoX3lgYx6gDPIxd2l/ENy4k/xeRlE575xcHFJQv26kC+FSCOODDiZK+onpb9T6kcgBy7K84J5L/jnBOgW+ZS03YtED+rZjAz21jr9G9GfSHRfdM5OfKNB7FJZMCoNOd6kZn74Pi6detg+CEgYmm9PDX2pUXqNUD8N1eineXEuCN/3hCUQxl1yYZoYrVeLd76RoM4ykRa0grdCvAYyOc4XBCjn3N1S+FSerHcTISt9nbffXao5vlmnRIeSuv3rqbBt12FY35E4gXm+wtGP14tIOTGgnjDANb6bwHIS3Jj1b9ewrAlfXgNUdoateDCBASlQMy6xkEhqwD5RoI4hFJySvNsiQPHB7hNmDiHoWtJEIsT9y7Rgz8WF9kaBq0YmEgUpYMjjremdteiWWM3DsRROmFrFlJJrOr9e4wi32Os1Ix3jYqUdh4AeSmRmkOKOfY0JOKD/varulh/b4Wgmdi19P3Oufev2AQxkCksQFndRZ6bCGI4MInc57oZsHWhzp31BIjxdxL11PNR/HSva041trVEaQWTyJuAb7il1NBTr6ppfp4hKIYue3F6N1rfKBCbhIati9HxAnLg6LaGtcXqx4bBfGe3XfVHHcGJLxHE+H+RiH46TCW2SNeSigNaffDOIj7kGwPiCzBklRb+3EDGZwzgej5LuJngxEuL0paL1ujBOZrRD14AceBFDF03AsSRIevSuLDdANwVZEW2tQJB4MZLgFhXnfayUEuUJlz2m3ueNlFfY8EdrZ+Nkyde573nWpluz8WDeKQu1pZLyI4toI2zXjN1ke/y9Cyi19vNhMrxFRUW4jkA6QlgjQP7wF8wg+par+smgFiGrNTCbd06ndtsFshrceMlQMz8qPLBwdCjAujSRi3LNePwyjkHA+8ilWBV19NNP75oEFfUhlY9aGUrtRS9m7toc97XFaG/HWp//eKczhreRYftJfrqs4C4V04x9bRIPSz5ahumfGyKMYusKB6s9b1rkMXWavTjO3oU3btYEFcAWKtjQ/4ANfcR8fdaaYhTNpTeoQoHwSpUIVExuDn9ld5VLe3eATKIwT04MSB+l4VSD+X//azOKoWleZyX3MV/fJEgThiyRChxXhIKyN9FnJbrJrUx19Q5SwDK/Z45vc1VFY73cM49ZWonle8RCiq/KFJLi1809wkCH3h6BLEAYp4eBeLteCkWTzAGReiXCnzR97q7nS4OxBlDFtyWDZgT21SwDp3HFq8TYdfSOyuxdK0ZIiniF5utp+EpNR4ODR7cTb1ucKBPHaxTacB7gLg3gDnIKTpPtdMlAYxxiwvQvyYqMDBbrL5EED/M3A8MeKeEKgIKQgEtoC8ByGzkXvplDkwSqe3vWwsJ6lYMpCBorHug5orpgJgIs54H2ZLx4zGNCRmFJjYAhDazxOqLAnHngA7ERvyynMR6OBR6G3bmcB77LmDgFF8DyOLG+j7/FwDh0NgT+BljUqkj3VGVekc/k4ozNZaatYrLHM2hrwD8qSvlJXOjBAeaLenD+N8SaWBqsb2LAXF0S8PcEz1e+Dh+mc3yqAXyYOdsON5lnKqqiI65lHEuBrFjgw3DMBV8dt5ITvjwW9dQlVF63SohAP+ZzgfD2BoDYIBsL0IHwDxcbo643fxcBIiDHowYzXiXDOKIc3zZtFvjzIhk/yWsNDWyerlCOCCQTA5qheUKgNeCWL+rBXV8AJj3dRMFUlFNyKeVCJo3u3mBuWLIAkDfN6ejhndRMb41UYRenJi/f897f0dDn4emmwdxuGoUAK+VmZS6FWFr+jJcScEZc8Rr+kgeAjWiXQ2Ix/qJ3pdxkkMzxaU5vAEfOvtcu8CaerAwaauDkFDxYcHtRpEB3bx475WP+gXee/6ufi4BxNxUiOWQp1UEqyZE1JCLx+JvnbtedGouGOj01G5svYM+m6RnDYD10RKQc30l3rNcVr59VAc4NBIRINYzZx+cA8D2BgkA/E+DQfZ3nHOfES0sASBYy6ufTYO4syGrmiihIZs95sBbNHzVABkOhv4sK/EJLax43AJgOpkK4tpDILNoU8NpBWCs3D0t3GN7y/qFATDftj5z1CMbSYjL6X+13Lq4WRAPwwD3hQuvyYHjxZD1eitlZnObxRrmpFsy5pRP/NBHK1hTHy4BOH4npWfbNo39wblbyt5ID+aTS/qD42lLjAbA75O47xqVJpaiXtJi5NokiDdYYoeoo6PRJ6zSlvTkw1Ux3vtftUAYM0DNBXH4jkRgWZwRebHs8/eJoSr+noxl8Y5vBDKvc1CVrPS0+fLwrXMAGAnu60dK+xDEE993DDd+fY34uFUQKzOphxGjhg41bdDPMLoojJB3pgSa1HyruY33/rCW1pIccz51OgXAGXABWGwFubho5RNzAL66Mye2NCrtE3HhcwG4JmEjBjLXpv5yzUbYJIiNrjXHgFEz/6ltbJVKuNE56kbbsQOm754CzloCxG6mIBbWxlaj9z0uJRm0uqtGxgu3O0pHwzCgMtBcvvWe7rgxsj33KjuJovayONemNKYOwipuvEkQh1Mf10cvH2jtXm1pJ8up3jmHeI3Yis/4SS0AjrlqzbsRiKcYlh4Ri/tWN58gRqfWKtaTkQAkOdVa71v2QNwWKzSleFoBrH5iIFfpxlsFMZPBglcTADCH6D3ete6oNbOilLH10hoQaqIlsFS4hOZchwOtjoddSk/usCDQhf0DZ8afjr0A62+PVMix4VERRA9BJDUidNwf6ocNLqqyVG8VxJj/e8bIdtgbo13YInccPEsXH3iM9x4R9eji6QXkChDz2alqjgI2ktbxzAGjEFB8xbGXoLSuehdglIxfpb7Gfo8+Szw0j72nqbVPpIZYNXuR9/5FYx1tFcRD6+w30l7VHRnOEuGaqvjxsy2gjbiwtSjrVxw8WHBtQMUxXjrSW2k7dW6oIMl7mTJGOBVvULLF1MNjzsEztrUAHTpwDwDrO7GBq8iNNwfiqwAPxOgt68Kl84KFtYn1pfa1v2cjHwDYAmDryhmGgZzekpQgo92R60WxzycGpNrBh3aItxiaTsCYEavZA4DeBkYgbqLnnhw2lWOYM+7UJwCbnnfrKDkyZ5Jv7EOGUzameosgvlQubImuNEf8fL/nnFOB9sr9dq3ZF3nvD9FWEjlrgRzatyb4q1DfUd+ORN05HDGZIRVJC6WqIvLbt0oErEuPTCwOojvDmH986qKOvIf+TrCTfMdUx3x+rv1mQBw2yZzNsQAtu3QZ36zQCujJ7qOJANakAcoTIi7M7wAhlt4pRsejTmwpG4nrtYYzDjUOm5Y9U9v32MKrEghtlgCwvs09UK8wA3m+9/4PUgPbBIiHYZCo0+OU7IK8BTqxYK4BMpuFIuMHblPLeSOOBuAQR6deYn6QABIGpxbgxKS8xomjBi19wxGniNYt39Dw+JZ9SmrJnC2UEqmz7qazgzhskN76yhwCLvmuBfKHjFhMjymC4oStIA6iNxbZOf7rnCFq6nqduJgShJZlv+VSclvcr2XtWoAsXZz+lwSvHT+Hk/XQZA1cWwFxKWyuZXEupa2SxP9W0NPglhh+WLzZ0VfhcJwSlJHinLJo87ekpVafeFKUjj425XBQWd/Wda+1siugZk0Aay6xy+lXvPekL548Zwdx4BiIjEs741sXea32HGBwPDhms/U5N8iONgZbOEBgBmwt4aYYlFLFFuLhT9FZD7r7xMUa48a43LCEqxzSWqmLdioxJpIGrrOD+Aa4lCbun5PXjhUmp4jNtqeOVmTLDQCJdFltfAF6rFwS86KdtSKPldiZwolLOnZpfXJA7lkvuzSG3O9TwR8/FecabwHEN8GlNHWR9B6J/T+RAnBrnPMCID6kORqOFG96gKdKl3BSxG1717LmyHsWcDnwtOiqU/XheL3sN+HAqmHWo+D9nL2RSlG85jM+G4g7intziLSFd4/iYE0s8RinTliR4YBTXEExXdA7LRjj31sxW+JnCigxN0/RH65fY02fapnOrTnGK0TmLXBgxggduVLGupn4+TWR+pwg5vRuqcywBcD1HsMxqIKOK+OWj2PI5QsXANc6B8RlNrbAWeKUKfG29I4dU41ezFgw2h3ylFsnVGiPwe7cHJghcsEbd0annhORegdx5x3Q0B0n/3OsvtgC4hquHcTcOS4mcQRrlMqBxoIXkdpyZInStYBTQfpc0oJCUBlfbZ+1S1MrCdT2N7VdSpRWXydW6nOCuCaOdyoBLuG9E3EwxVUT0VLX5hW/l3inhrON0cuK0inQ2CwjgCsXlHVLWRC3ZCLp8CCzR4eCfMhjBrI569/7UJgyFgWwIG2wT2KJ9aTqx1lAbMIBJbYo91N/EwCOcYHfI8ptQbyZshi5d07cIhVcNXbtsNHY1IcNV3h/jniIQQuRNcfxBDIBC52SMRFphoFILpJYxxXwawxdfFvZTBwA8SGQA7NopEOFwwjOni0eGOa55OUEpT1ko89s1ZTY1XSP9/6n1NlqII4Lo5lCa7rX5x0i66Wd8Fg4JhuoxhBSIuBavwfALNZhM1ZYpJmbwid5R5sWizYlZw55xccFTV+3UhvYYLuCA2BljjmTgMe6sdFy/lOBLRd9xQGhFEi+O0W/HQNwaj05+KAXqkyO4/YIkGndS3HoaFz2SCAmKYI/JNYcY6lXA7GdlbGiskEhLKFsOY7Lz9koJ5t1hEpsjK0GjmQLx2k+hjZsUCSSmkAGccwxUbBFrD7UxIpobMVm+oLGTQEQpu5VvHwSw+cEbohj62qYMSCNRXkxzzUMrgDXXkLHGuaYlWKpdYkCf7/Qe4/x6zzXuAzDQK4oAJ5abaE2p3RLgIYzPT6Ic0ewRRk82niMu/XisBNL98gOHgO6rt6MOYPCLcVVNb6WGOfDkEaArCEj7triCjVcTQcM46qppVUKAV1KL1bF1NScxooOMl7ujNK4ADEJEb94FhAPw8BJ2ZoHWlrI5M0G5iW+CfDPKXbXps6Jy021A5SSDCAL4JP/GJrAAdkgOaMTIAEcHBS8C8eApk0+aAAcVIjkehqAZyuAjGwExoXUUiuFZe+haqzkWdqbY1lWtdVC+Qbqzd3hYwd933v/7HOBmA2w1EnHnEqAVsWINdMej2V1Sise9My5mTJzQxE1TIAR19Zm8yNB8btmSWoMyPfdd5+73/24N+/wwJGlQmHkrNkzNW3U/1i015TwT7u0ADenr3PwNUswAcR8AyBzoyOXrqEX37W6TjxoFSt2c6cmY6BeqwwQ3BEg203WapRpJUcNRx7rs2QMQ7JpBjFApR50qAl98v2MqA3d2PTH+PKRQbeAmG7GDrspVUByXLeF4+amJ07MHN8YGv0OevGqID4DgGOC5ACt07F5U1YgCwsvRiIrqubCD3unZM6JLT4BREkUrqDDsUnEcY8/r9CXSwdTC4jZC2MHfG1fSwLXklUghgvrIejjd1cBsfEL99aFW/aOFdMAbW4BAZz1cU75hn3HWkJzflH5QXvTZ2qureKIr3FK/SDFSW3jMUC2gtj0JRDDmVNhoK3cc4wTl0Tqklto7r6J38ducdCBzfNi7/2L1wRxr2D83sRRfylQzxW37SYZiynmdxiYphqzcjSZYullHKNurVqunANy6v2xPk0/kixSkgw/q7VOQ6+SlDLmkhOAp+q3U/Yw3/y28KIMXNw28YtrgpgY3ikK/ZQJz30HERgAxMBTKdHSPBSgr+ig3IkvkY3fc2A0+V0rJlnrdqIrDjEsu1UqRS2QK8Y4Kk4bANvwT8Vmp0TeEgfle7UZUFu6Soi9xHoiTtvqHr+xCoih2gb04Zb9lGuLuIafhEuyXhg1emuThxpHOqVArBsN5INtcY+0zKXGUl2r/10Tr0tidctAC21lHEw1S40/9TObyHEMWy18dxJtOs7bdvVpJgxWP/+txUF8C/KGvz3cgqdoLIhr43NlhY6t0VYkbInOatkfSiPM+X9ruFbL96a0tUkT1943nJgw07G45xxXTunPtWmVjKdUA3vKnKe+IxBz1xOiNM/vrQFizOs1UTRTJ7bF92rCIO24l9KJ+UbOuLVkyh2HBtIIALLBF3JLAUb0ScRahR6iqgCuVECOLq1T7HhuzXNx3rRXXEBctKDEabdw0Gm+HxeJ0oz9tWuAeOngji2COAeenG+Yn7NZet9zfJJsYQi1dHww3wXE0l35W2AV5wWQAhS/t2I/wGeDctDQhkNRedFWsmFKYyC0fdrgnjjXeWwPtcScL70XPzJwYHFi5v6mNUB8G2topRIIaha4N3ccSygocaCa8abayOhn9xZ7wAJKILJ7g/Y2F5m+YzWAMacOwpzfnT70u5gT187/nKmJMX0FYvvzVy8G4qALb+kUm7opp7xXY0xK9dt7w+SinHoHlXBYAJIx1xR7zYJZIMrtwbg6iLhuTprJrVPMjVu4MH2WItem7I+p70ictjrxHYuBmFEOw4BR4JxJB1OJNee9kv+x1Hcthyj1c6igmWgEgL+wNXlh5GMY9JA8AEeN1KU9F3NhfSL381a65DiwPRxq+qxpU1qLXr+POTFje9XSIL6NReHHQgPHxD670K2RR6lNkjNo9fR9ovfqkBannbphU+CW/1xZVlP6tj59ufPgrow9jmdP9T+nMsqU8ebeedeMKrEciIdhmHsPUE8CrNlXLEqXROuURRVuQfTW1MD5nDTQ26DFQVHDfafSXzpxTfJD/I2Y7qliATVSUzGCberkGt7jEPtW0x5xmufgZlqMEw/DcBu5cBwJlOK8Jeuq3lHZolb3nCKbUmJgq89T9yzHObqI0KQHLlkBwxq1plT8iOmcG2speuucnBiX3Odn/ONHIC8JYkIIa0rLNBxIm25KSBy6YewKGRt0iUtLFKx1PfXM8tG4dSMg0oGqLy7Jffku87CHVwlopY1R0muXoFtpTLnfs4+eVlHQ7/j+kiBeeqGnEmmp9yy3sOCMc4j1fblL9H/rU03dogA3JCCCWtWI2vK3suhYtUtVHEsb+TCOTNKCwhWr+phJYCSJ1KFVOvByn60Z89F+kCiXtIR1Wvo4Y/4O59yfcs79dGICiMu2mGByjouA+JaK0ohdcOLUZosBy2LwM3FahQZaX6Y2n60aqQR5W2Ctpo5zk0ho6zaY2OhS0sdM7B5eZz+msrlSiRw1rqZaG8CTrupVYc0/PjPvtOJAZV3+bQDob1cSB9Cy7h8a3YP8Non3lxWnQyG83ml1lXQ4W7PavGHr4uDfqvipKCU2njaB6jfXcJOxic/lJkgZc0sG1SwMc4/LAem9KcYtHZalbz/Oe89BMQXExDPzXLs3uPDRh12pXp8aJKpk9pqRit7vKj7/DtOfAMyPlrFO35CMpdLC29+niqzHnEIcGo6meNyaK1aed5W58tedc3eZMMUWVeXtnXP0Maem2BpcWJw4Z4AqVaiM10v0rjK++SgdS5zY3KgxdpACZKpRIoktERdBkIdVl5a1Tg/DwKlfa4hpAcqW29ZyCTZWTV3k1Fw/PRjNOPHRh988iF73jxpTQA2x9A1X+aeIYW931fZfNVSBjL+9FoD57phqYK9YrZVMGDugKhV3+Gjvfeo61gMthmE4dxIP6tD3O+cEXh1QB+7cXSe+BamHKYDVlMHhhgvAV6PD5g4s3coAJ1YqmkLw3uSce2D0ohZ96jdxb/yn0OeUvdISAAIXK5WbrfHrWhKw2UsVUziAT66HSdyL1WRTWIDbxCDWJ5bxEw/DcNtcS2MF1wAbf/7EVRGBRzvnvrLDAqO78c1XVvQFiNnINWJ7rjvGDneH4/OHmrKAswRq3ItwMMRg/J1Y1a2EJoALRDX1xTjEZC+omP5h7qgRdv5wXA4LfvdBcGBrxMoU86/l/DVjmtImBWLGvxgnbtHXpkxoa+/YGGWlXT7UOXcPuZ5B7P3szvWzAPFXVRLia2eU/QEw3JH7y+ZbgA+Or3uBBOp4OIBzzBgmS3vlNI7NSj7dXH8cKEhCADp7D5Z9OYA7WTSwddAz23N4yQVlbS39OXGY9NYL4s2k57XXPyBwmocETsUmxwglUZYFQDrpqVvC3eDI/7tiMnNATPdYUccewCxQw6nFoXWHVsUQm5rA1eHyNXdzjbqhcvdBMxrDnXvGmjdN1DTGcGZrvlnJoL91+pZZpr/littGPSI6AAAgAElEQVT+w1DM+63CBpauyhr88cCBl7BYImIR+pgTqzlEAFSVdTazuziAfrBh5wFiAM0fAhgQoZd6VCwApsGhZnORdTuFKphy4F0TicdAbIB8blGaoWCd5vK05KFU0muaFuAW6sNs8icGItkcT0s3uPJSD4YebTJ7eOh7HzLj3ivm9j8n+D/5NoD6k+EQ+x9LTb6y36Rr6oIAzDRtCuL1w6iSEFXNhmHgBJxz8ld9Z0ONBKIjgLz3rx2G4c3CGH+utgTsxDnJWn1gHMZizf+PlumKmxVSn4+5MC6t2gOJtnBiwPzfJ86tx2twa1yeLy2B1n5sY5cdIHH9UlSWh+EewdybE9+WzCVdrYpuBoAPgPHeE2F1eEIqJvToqQvHGxu9UFU1Yo7MmBAn54jyJX04BTQArAcg83CYrf1ghYYLH3TnCwYxqgAVVe3BbKO3im6CasLfIv+wStNisT0RbSIuDO1qOVc1naOGGDsAMYdKzInRx3sUpP+zE0Vqhgqg4cY/PzNirJU+AJjNf3Rb1YCYPWwitM7tG9acCbmMn9N910qdXPsOIFY5U8Q4uMeY9VEJAPp7jbheXbWJiMa/X+W9P8bLIkIDYugTxGk44dQgi5ZlkZ/1UKrFvAiIp0aH2e/PAbH6eeSKZYuVOnntorMSkGcmPbSsWW1bDiMMp6uBeGolD0C79MPY5JrghMXlw0lNXPH/DbWZGcPbjgzkEyL99hHee/o8eYw+DIiWtg9wSOCnBsApELfcTZSaOoD4hvCLqVKFxOtvnlGppGV/HENgS6BNrJ2NL9+Cf5ghihNbw+linLjWqAVo4RDZWNWWFZvYFtGT2GL+6HmX8I8vDxbnx6b6NkYiTnqisNC3DhxYjwHy1I3fMi1dbxKHYubS+lr6jkFsjVsCZ2qOqXYva/nwxLbX8oJb+ok4ce/Koy1DUVvdhGglrOWs08MwAMyx0Dm4BoOKH1WM4G84R+pRArxuDrA3CKD3sdl4H2uxriVNHRJsdEIIEdfR076glbLRDX2M65UWxAbAdL00iJmr8mBTII5DDlunSyALur81Vtk+NL8Y0Ln2SwL5Wh53CyeOAJxLnEDyUggn/y4lVrTSO26fqjNNm8U4cSp7iYkC3li/lTi7hi47l5C59zkwjlbCSB/WO5+0cB4uBxUHo3RvBX4o0OMbZ4iwrF18bQjzil1NFrAxqEUHDhMs1Uu5m66FYrYAmEFGIL4GlGgT5O627gnqOEpLQ1iUE8c6MbpnXGbmkkEbg/kI4pQ4HSzVLOqSxRHsLX9WJxaIGfNUvfyvVAaKxFw3lj7s78mIKmUqtR66ufraU9xKWaCMDGoM0IjkUyqWSmolXjpX6uk4pG5+4uAXRUyNjT03Cbh2LRG5ToI84oUOovVSIjWHpCSdk1ja4Ldm8TlEpviJFWBAkEH8WG7Lv1OcOH5HbXqL01WXqJe4csSF596OkQM1NGE9SokfGFyZl014GJUMeoJYOqksfGxyBl11aXXr8buB9klxOjWuBeLJ2Qgstu5BjkUs3WuEijPlEKXff+ac+5hg5LM1olIgFpjHDiw8AfGdznOXsVgFsxHAHHxITlMOvtRcxgAdt/8/wR8vxlAbs31vbxAzsC1dBTl3k+TeB0SPd879NzWIRWr9fBgGNi8iX8/yvYhp32NuMEgtOGs718XENOD2n+OcA8ixelQDXpHi3ReI3GId0IeznCqR4H8iZkdcGNF3yqHXss+UjaS8aBlmkX5QYYiSI9mh9nldNxDzxQ4BH7UD30K7rE5sBxdE6p4+Y4yEuvsI8ObuQFIpoB6HB1ZSceNUOV2mXFIbPnkhgFAxJfvtTJL/NX15Q3H/gPnHGjZ43/uJb1GpWlV//MOk7MhPbLjwIYpL0VzDMAC6OQXr4Oi8L7uDQHz8pFl8QIxUVFMxI7lnjDsN8fpvJzixfa8E4rsbNmZL0y8LNcQoTtD8RCCvFWGbv9PwAtLFhze0f0U3TnzL0hAh9J8ToXMgTi3EMAy4WT6iYZHUVGJj/KoN7bRVVQ7lZzpxPzg/Rc5Thq4aIGMsekphzjqYdCF5LYnQO38gqBavqygbdK3fEC+9lYo0zEcJDzU0uLMLiG+ZGA1h4YjUiyJ++iRaq0R1I15zm4MMKanXpDOR+A9QU2KsOEfu0m6MiuhcuHUUMFMaYvx7ZWw9O/h6qSYyVgw9x5FTnBjdHrXkM5xziMW2UsmHBSMTc8wFAWmsBKX8QYjAQzpq3ddbukdb/uHadXpJ62RzYtdtK1MLZyFyZ1Sczq2CSZCA/oi8HxhEZOhoRWX5CK3YHF++LSDnLNRsUPqn7yk+Wg4TxGkFMgC8fzAiWqdA/CVRdJMin1QnDADGh5QCRPj7LxaiowRiSA5HhSPrcK29KaJUFbMWVHPayStwkmo40uG93vsX9wLx1OSHORM+57tsOOY86ifOiNMqGMCvbVCGwKn8Y0AZ5yLHG31MJ5abie8IyK0RRSosF3NCrKjimlbH1/hSQBYnVjyw5eY5Y5m9n4p55FxUGIP+q6E3/fE99OQxEENfXEqpEN0eBsHWPUqyQ4te/jpy2HuBeCv6RCvRprZnI3LPzvFpFasPLOOPKoDEYLZdj10kFovT4kR63747p2xtik6U3xGAqS8GN+VJAVmVPgTcFPBr1+JHEuK1SgnRB2PhO/eF8b0xweVVvzoVzcaBoAfJZUrEVe1cbLtWAPMu6tzLZ4P4FurDIvxJuOEUEBsgp0BsARhbtAGKPbFTOjHdq7YzIvESFUZwPVkuGgM5t5ntxXFTNjy1w6yhTKV16Utj0IGC35XC+lJdsEWUJBICaeyhtzRXbjVmiWZ3su92EE/ZQn/4ziwQR9lO9Icv2VZsjEVJxHcAY2+RsJxYNa9TM1qqfCxcyxqjSiBOHUZTV4C+3sMcIjljG3uczLX3vire9+8bD7OYKzPW3pyZ9aQueelq2hSdXuS9v68HiJcO8p+6yEu/V4ydHhtABGJxYnFLAMsmRZzDOk0UkS7rUkYYi67YaX0qFfjRM+gjnhIc64fCD/l2ykDFr60xbo4onSKp6njFXJj/U8Cf57dmbAYMeZTefXHo4607R99BQxVeaBnmG7z3B3WgB4jHOEDLoC6t7ZET14rSCe6rOauUDmJbSzCIxD4K9OGGig1d9I+9Ah1wctBHYWHQR8UFc37kueLz2BBS9BJ4ee8FjTTNfUu+chkzsbjP5cocwriUWoxZxwPbe39IKOkB4nPfGHcu8DeBOANgEgxYwLkAY4NhYZVIZvVUQEzFix9uFCVr6cpBwgGilEuB2gLagngJQMdAFojfpyLIpHaetIMrc5+WQPd5M67Iob+pujDvHvTh2SAORi38a0sr/i2EXqstEVSHjVrLiTWwAOi516vE81RWk4AcR2+pttga9EEH5ypODhPEXWtsOnKSzgMByFim9eibvTOnODCZm01S+M0Jc4ELf3zje/rOuzrnDvrwbBAfZLXz393aSIduzeFuxytUaoEcADznZoaxCQAeuEXMiWfHUU+gGpuUSCzAJU6putwlA1jL5zgkkGiIKMNijVUZv7a1nPeuew0HJYPNBmVQCLAlmKbVpfQpRtp5uPf+N0SkHuL0bfMRi3ZwvI+q5cQmCYLUxGOR+ZbdWtk2vhVCh7UMZU+YeCNE5eePzRCxSWEEZBjsFPYJ2GRlzxnCLPdOBYJwaXpNzi8HmqLCPrfyndp5quxUHOf8pWF+lKDKPfaWw5rvcQg/zzR8X+/9L/QEMcRcOgezZqJrt3kn7/1Lbb3p3ABWLp7HMDBkxb5jNgI/Rzde61H8d2wAUl0wm6MsQMPRCGtF7+R9QjyJo+ZeKB7cSv+hQb9HzSB5gwcJqLfqxxipkJrKAY7FbIBPNlhLvjDjtv2wrn/ae/+KniC+jZz4cNl1qu40hLWgjQroIfatASL09TgaCakL1xWiJkaoqQkRrQdAzXd0i0WJNjLgTWEaxFfzfOZMY1Ru/nD9VKF3hX2+cwjTbbVExwfBF3vvT+6m7iFO3zY/MYtFVY+DUWHsKpdEKVsWsnf4Y25TobPbA9bGUsMZEXHHRL5WsM5tD8dcejwAmWypUlrknLlgdOr1PCuSOL7POfdU7/1/th/YQdxGblt+F2vvr8cJ3PF9TBEn/smKtLq2EeVbp8Isbe0tjDA1emWv8ZT6wRDWmktc6jP1e5I3eJYEMu4+pAbqZrVyXo35Q6WmGhvG16FKeO9PLO49QIxoVopFnULsLb1jE+8tOK5lM5lBx9kza93NpCGgq6WCEQRkQNxbP5y7ZjWi99xv8D5AfsAKqk3Kil0zfgpO/Gii4TVRmjazQUwnC1RzrJnoWm2SADanI/ocpy6ia8o+wEmssMqpNaCnzJUxsYlyRfR0y8HSImzL2Isg7mhZ180ZJT28ZfyptlPE65Tf+VtIt/TeE4Z78swGccX1LXOJcM73cxw4HpOswdKT7e8FYjjzWvqwvq9L0PV/hQwq2QIDUalqxpr0L4K442AwTsqCvySQW0GcCxwhPPMpqXiEHiC+rbHTdj/pUjOBWEXb9H/ojKGJkj5rPscyQkEasBdzYWTjYFl7TGPzXxPEjENWcf6NetFbKmkFMD7mlJ2CLKcXeu+TlxDuIO4HKYCsCJ4YxHyFustzY6RbR3tSRijxMhwZsXorQJ4C4tKNCiWaYaBU8A2W6152gtaIrKMhKxowFmkKIfyM955reK89vUCMmLhE0nlpAbb0e0717wwlYTQuy5mRWNYWp1Va19LJcmN0dbjxmnHVvTmxVJ45+w/LuG7sxJc+9/6s1trR0CQnRlOS9/ne+6w1vReIp5rRzwHCJf2R6KCqtijaAmTAwrM2iCXmX4vxji5D3wo3nsKJVSRh7nVBulWDdQLEU/vDoPgVjRs7B+DfudLbPz8kO9jiCyfd9wIxJ8/c06tx3tXNVVkxjlfurf8wIOggIwkidcyJp15wVj3ZqCE68fGqGX6XuUsZbsxBs/YhE89LhqaWnGr6UIXQqcDTOOztGlNUjCmphWMZUHBhYhGSBi0N+iaBWBePowfmsknwm85d6DFAoVOlHunIPS/rqgH2SaZVDOJUBwl3IXRFwmgFVs34eoFYQJ67thwiHLRU8uDhfuca6z0iPRlbtaVmNe84IiumBxbpZ1OWdoyYs0FM58MwnKPuNIRjg+liMc1Tmw0DRU3h8SmbbewdDhFEn7hKJUBeUy/GhfJEO9BSuqSph40VVIA4C4gn+IN7cWNIxhpKKvjCigoerVZo9sY3FQ4ILNLPhROXbnbsAuIA5KUTIdDvEIHRaXOPRNk5Ro65oD6mKCaATN9fs1K4Y9WFb5qsSZWUNKHbKQDHmhF5U/RiTUMumJa83tx622tz6C9WF/kWjKRV/8UKrZs5ct+GA6MPv8x7/8ulDbllEGNo4IFYEm/sfCAs5UdrxJ0SHXr/3hbRs+GX/PupV3/ev/cHo/6qLnyz7xgQq7i9LNfQec36y1sBMeRhD5ITzUMoJEwE28rzzSXgLUv5yAoXFvHRuJT4zu9773+/9IGeIJ574x9j5WQjrCz21akyBZyWDbpVI5rojYELdxNPHEPN///JAoEF+jYbD2nlYM0sidCpDZKwXLN510qWmGrcsty4Bye2pJF3Abywfg+cELJcA+BnhtxkAPwm7/2LSgA+rHFNo5o2M+OndaO6yrHqkwLAua2mNSSwbZAePsH+ILIKs8mWCPwAABwgT5wCXo3X6MY6hJAsGPMaYnUPEDPupYD84FBzvPUq1Zo6XKRKav4Uwqty3fYE8ZS8YgacEoeV6zq3JGgr+Hq2z9alDhdaY/nsOT90caSY4/UyU4A8crUM68SfJVxzlu69QNwTyEh/X3+VUAKAcRsS6fagCiYIE3qvyso3x6tyW7jwuTkxhhcrarLpEacvjevmgH+shhmLtQYopYu5Ww4VrNFP995jEJn0RACO94dyfVmzJRMG+O4cvZj3exm4lOlEf28wRMVuAB3uP0LoXDph6hULYH7/Eu999aXsPTkxIKxNtQPA9pl1o/2kHbvOS8VbIoZhmCLBxKNX3Parp3BfOjMApoYV66i9EV8nw+bFujqlRE4t1eeCWEBGOmlVAbApsG74fX83GrCADHgpjwtnzmGoRnymewxZcHkeapnfxU2HtYTqzYlrfMUYXKzRSuLk1g1VLTSND6fiHcYTy/4q8J+Ff0sWXkCcAWREZXRqQEqgSDwX/s+9RjyAXVeD5ugzFYxT37PjQDJRXHWN/UGpiU8LnQBQ+1hOzM+5qI0DjeIC8VMLYN7jkFRMAWtJPWkugKt+unFivlgwbsEtrKLOKblGFFA1MRZoeAy4SIU7Jn5GfWTUiTFdGZCx6OKExUOiNK+RYvZ8Cz3bXvQmENMtuiGHN5eYp8Y8NU69B4gZH/TXTRSflOHKiMzMT8n2AisgjoFrSSkD10MCN5b7sCVGwdIVbNzjvX99ab3i368FYiJgFFGDqyK36K3j33p7RLNHi1PawSaudVH1D+Vn69Bjc/AzuAqbWweh/p4F4mEYqINNbnEuVvhQ2dNwCwtipoRoCeeOuR5rTuLFrDKxEyK34j2BUYpL3xCNGScGRcrzvGe4p+l1zrmHhrGK+46B1/YPN2bdoEEL9xUHPtkSzjkuDU8Vlhjd571BnPIVWwD3tshuHcSML3lnU8aIlIp60xrpd/yff9uUwgMdWsXoMAbE4ppgfw4Ve7uhBTObGA5EHWn2QBzgwjdadWgOwF7We/l5ASugjZ9a0FrujBTysaF6plyktfsRQ1as997XYsyyH+oG4nCiYwz4F+YDKiTHj2w8bu1kL73dSSG9TAaRnaM2W2regJbfXwOvGreA2PiCbQkiumJD4q9PeQk4kHnkBoq5Mr9L+Tal8wF23sleqxLVLqO/KfYSifEPDwYoSYEpupYALODGXPrvTxwbIZVE7Z1w4Za1iyfRDcR0PAwDlfoxDEjWFxda6u6hSwB58jLyhDgtDiugCtAnSfzWgHVyGocb8moJEr6fcnHpGpic1CSDEUC2IK4KTAjj45oWRFu4EaGzgCwGK0D8N4arYw2Gm4tDIyajqhCLzjgkDWgcSAWI0Dnuy1BKOi+/tyCmr88K1uRm3dU5R5UOCszHtLp7ihh9PLxrF73UbhgGFHxEDPkptXlrxbXSJy7190kQnxzDw6B4ZcTk7MFaMo61EGgYBoAT+yfpQlwT8Tjns4dbE89uubgAXQNmy5k58NGd2Ts8RFrRL+OTeG5FYIHybQ3A1R+uMf4du4ZKgI1JZ7ku/9Y3UTumpDtybQtuJMIqYzH6jd77N7as3WKceBgGlHwWQvqQOEjPgIY5cz3Hu1U3Jw7D8Obe+7tiF1HqOpipk7B9D8OAKylVSwpxmetpDuLyMAyle7aw7NqLzVuArAPD6tA2fZOfp8AoEoxx2BSZSlzXAt0Cl5+TSdRidbbfR3TmPikOKxicPeSGOWJ0d04cUy1smjVvPJi6v5d6jwXj1sRDovjUxaq5sK1mAkYHxkCVirjCnfQMe79UuH8aYI0F8SBes0Gld8JVa7jx2LB5P2WAqplqrk0M4tgPrPckQr+bc+7JM8Cr/qAN6Z0ws65i9CIgjtLZ8Mu1WiTnLNLW3iWhmySIQ32rqSDuMalgdETHHrsVEa76E3ECegAywxgDJgDGDaUc2xyQ44yu1PSWAHBOnI6BDHe/s2OmXOwHtvN9cE2aYc369zZs2VxUNkxNpEzNOC+xDafvceP3BHEpMisSnRlHqeY1RqTDbRG5KhIhaaMUVitdlv6kz9q1i6udpA6GNUEsPRxXEQa2Hi6tHw/MK7ZAWzrc673vJml0BXHQowAypz5i1hT3wCUCNh7zSTJCL5HY0Pf4vejCtiPHN+Izeu6YRATwdFWrXEfX1iBwZPqqTX6I9WXuH24FcaveO7Z3bECHROspFuaxbyCRkE44hiuMl5OCOnIf7gbiRAobls2bHlaZouuh/vTUbKIY8KkDIGfwMsBlXWvpz3ifUKrjZPRjwixrb0tAvJaozWGBmC1fseXC9t/dOFS0OFizvzf4uHvnGnMI8nx/mN9YrvHrvff39ORU3UCc4BJfu0LuaU9azO3LxjS/aqr4HInCUk/isaWCPnDlESeMAaX2VgT02APHLIE4rK+C9XGzYOFuET+V78zYBGhZpiWmzwGwuDZ/89AXHhIA1tU2E4WCPs57f6j7FtYOC30qKYIms91JqU3aFcQRkG+Ta4lF5Pb2Zh04EfQxdpjYQBAbjgk3bU3WB1SHwI0aANtBBa6MywUQT1WZZNVGhIdbI27z4FaCaypQg5/FBjGbYUUgEfYXDpbeHPY47TiG23vvw2WCv+q9P/jLcRWGAJJUwYBJyQ01nKUriKMNeVus08/13qMHTXoyII6jtlgnNiibnYADxNQ5G1ahla/RBmwdvLFaA6C5NbhUM1yVTGUgU2CFEmaU67taccQIvIyLA+URKboNw4AYzVoBYlswoLsebNdrSRDjJ73JOjGAgvN+VIvoHE7rEyd/ZE9ABMRqqjuB4FRzABvjU9lRkwGsDo2eHGdWtZ4Jl9KeA2tUcglAppAef/TMCqssEWdJEN/kcEsVN6gO5LAGqmEYcPsook0WW5WC6XUrX2rtlR9cpQOXNk8EZom9JTdUbbert8ukPX6i9/5QPplDq6R6DMMAptCJJVK/oTXJv3XiS4KYHNWbUi/L0jU2ZCTvN4pdP2FhMVQhWiEuw13RK+G4LQai1jVW+w/23iO2LvoE7kxJnNayOIuOK9U5oNXj/QkUEJtVQuodbRRbzSCHYUCUBsT4g2fFRdd8ryuIw2kliyoiIcEeUwLGa8a+dhsMMYjQv5QTn2P9lnbDMLxduO5UHHfta0QP+dxTdd8pRA6BIapYShdr1ayeMly9I++CLi04FGAocd7M4YBu/IA1AMz3lwTxTQr4eIz3/lATOxUtFYnK1i3EQab7lzgA1jzQsFh/95rgtRs6AFk2kbFwzznAm/uuAEs6I1LjwQo+BbjR3A+4woA9d4A17y8JYr7PJr5YHUkuGLJYxoI3Ig6sMjsKiFjNkhouAsNSrOADNlI2Cqtmg8xtY8AMZ1ZZYtxSa9JF00BMtoUNTtItoVWN3juXJr3f7w5iDdBs7Ev1F+Pz4xB6ZUp8zgRlAOC4UkbvNUv1J5dRs893jcEZIMvfq4on6M1IOF2DMcycEJH5hkJA7XQ3Sasp67EIiCPO9NiKS6SmjH2pd1hwgHhN9x3J913bEo8YiK+YBHPEwMn621JEjPs1fmVbdEC5yEgtiN7MCUCLa48ND/Cja/M384cmtgyPRHn5dm0gzlmlk9407w7iRPDCxYA4ROEcdNox45WxPHPKWwNO7/Wx/SEGYsXGBWU5GmM9B/evnqsBMO/ESRD8zBaol8itdgr1ZI42b9m+Z8eiUE5+dmOBayfcHcR0ntARt7zJFKT/VdJ7U6JysDRbyztcYGrIYQ0A4CxsZAxU2pBHOp5b162ZgFGt4qCfFJBToLTVNcc+eawOcql6bQs947ZrgRiRp2fU0Zw5x+9SGgdX0JtVuo7Q8XsVN0/NA9BysNiyNwcQXxJwR8TpHDeOualtJ46aTGW8ZLr02MiLgDjBjbcW+AGXo+J/8gKyhMuIIHvEvCUMMBwIiOW6gYANK5Hy7NblHpvMcmRxStNvnNwgoMbATVYWifu7jYBeE8QEfkwtNtZzL32R9/6rx6pjJAxYvf19qovMhhVNkqKy9MlLExOtHpwCllw5kb6cW+dkWR9T0K8YDtlzA22tr7VAzLy3UDQP8HxBKWHBJNezeXqGjqJWMIZfSXCkJNe9RL9lrAtbEKfAnfvZzmXrjovFQJwQqfnRuXzGuI2IG+aem2vXfyYMWT0t6nDYxxNEr6wfa02+ZJCWtljMbUfqdx0MX2O/vzRJpESbnr9fE8Tn0osPIZPSc3MGrABkdF+eHgX+cAkRZkno42jtqpuux+VE67EDbIw79wTATehrURBH3JhoplzN4yVoqdDDpPHKfjAAuAf3PVwxEvzNt1pPKy1orAuXRO5Sf7f594uD2OhHqoK5hs+Yw0J1nK4FbiwkPhPGF1/MfZv3VtXcU9y4ZPS66ZJLFeFMo7VBvIZefMw4kiQwEvuMiI/rYs7BcigQ0Jpz2rpQN7W9tb5bg5i1PMdz30F8SpFzgHjJGxKf6b3/yNKGD5yYeGcCUKZGXZ3cW1T65v77PAViN9qYkWun43UKnAPES6UnYjx6+0r30ayDBJ13bDNZcXDnGjvslqbAOUDMnHpbqnEfVResG2xdljYKo/NSruVamRur291kt1EbufbWa1BgNRBLPw2TQpTlOpAeEVzk0qKXJvN+YyLOAPAxbne3pK6xNfdv1FLgXCDulTyPFZrKIYfKkRWidGv4pC7TvnZbYDiUjtk5U8XmnWvXbtW9XY4C5wIx45mrG1O3CT24lgOXLsyOafQk773KyGZ3UMq6um+3nQJrUuCcIJ6jF1N2BZBR2WL0CZboltsoCNh4jr1kbCwwofT9/fc7BZamwKogjvRiFZRrLaR34gcuESiAuDZmG/GZlED8xsf83R3EJSrvvz8nBc4J4qki9SGJv5ZojYaspPHK6r9Tdd/a8e7tdgq0UmB1ECe4cekSbDsn3DtFEdp841nOufevIAqVNI63MPQEaipftmf/FXPbm9xwCqwO4kQhvVoDFz5aLqmusUK/ffBFc4Ng6SFRQuVwulfSKCXHlwa3/36nQIkCq4M4wYn5EaVGx25QRFelymPx8u5wSNQazWThFp0OJWB6cMo9+KO09fbf96LAWUCswUdcOWd8ohoGIL6jpAub/mrSCuOMo24Ajhdnd0P12q57PykKbAnET85UxETcfXqqIkdqQsMwIEoD4rHEhsUAvAdv7EBbmwJbAnHqFgXCKeHC943dhRRxduY0VuFfucaW1reiyPjam2v/3gqyN7UAAAOdSURBVDoUOCuIpR+bwuwWyBibCLzgz2hYpRGjcRGNWa91KFwDcA89eJ0l27+yU+CUAmcHsR3OMAw2NPKY2KA2YzrxMAxcgIZxbAzEujhaXR6KAewA3mFxyRTYGojfIXBerr1E7L2jVhcOXJ0k/1yRO/rjOblZYev3GF3y5trHvg4FNgViq9uWLNExecL1mY/K3MCIcUw35lkQL2aRXmf59q/sFHBucyBOBIMcxui9T7qgTPux60V1P61qaW3+KtB9c+4UqKXApkA8DAPjeZhz7n6h0PtxHgV9mEqaYwEecGIAzJ+LAvDusqrdyre33dlBHID7AJitc+5e7/29kbEre1uhFb+dczlOzC2DiNK6jPugF1+KMWsH8e0FZ+3Mzw7iYJACxA9yzt3DH+89160UHyNKk9aIKwqDmH10+yEgPkkvLHZ+xgY7cM9I/Av89CZAbID8QOfcmwJHHi2lE+nOJFFQsysGMRlS0oMv4oLuvXzrBaLozEPeDIgDkO/vnIMrw41PxOqYThEXTt1eCGilCx/04GAgG4vmOvNyOLdz4bMvwcUNYFMgDkDGqAWYAXItN6aONIEi/LHPommGF7fa+4BvJAU2B+IAZMZ1vwZunMpJRpSG60qMvhhj1o3cafukFqPAJkFsgMxlC1kjVxCpAXAqyAMQ8xwLvV+KRXqx1d47vpEU2CyIRW1cUGNi9TAMhGoSEx2HWxLgARfGtXR4dhDfyD186ye1eRCXViiEWxIz/V1R20PK4R4bXaLg/vtLp8BNADHRWqlAD7jzRbiVLn0T7eM/LwUuFsSRi4l52PrVBHdQvXJPNTzv/tq/vgIFLhbEljahJM+vmWJ7GLOU9LDrwytspP0T56PAxYM4cGSCPZ5qakxzzcszvPeH9MM9gOJ8G2z/8vIUuHgQB5BSHI9HBfIO+vBujV5+A+1fOD8FbgqIMW5Rnuetwp3HxwIAO5DPv8n2ESxLgRsB4sCNCdUk8OMhlxInvezS7r3fFgrcGBBrwYZheJj3/u7bsoD7PHcK3DgQGzA/xHv/+n2JdwrcdArcWBDf9IXb57dTQBTYQbzvhZ0CF06BHcQXvoD78HcK7CDe98BOgQunwA7iC1/Affg7BXYQ73tgp8CFU2AH8YUv4D78nQI7iPc9sFPgwimwg/jCF3Af/k6BHcT7HtgpcOEU2EF84Qu4D3+nwA7ifQ/sFLhwCuwgvvAF3Ie/U2AH8b4HdgpcOAX+P6BZZKXDry9YAAAAAElFTkSuQmCC'
						/>
					</defs>
				</svg>
			)}
		</>
	);
};
