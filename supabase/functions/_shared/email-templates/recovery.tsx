/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

const LOGO_URL = 'https://mtbsuzhkxzhgmijeafnq.supabase.co/storage/v1/object/public/email-assets/roomonitor-logo.png'

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Restablecer tu contraseña de Roomonitor</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={LOGO_URL} alt="Roomonitor" width="150" height="auto" style={logo} />
        <Heading style={h1}>Restablecer contraseña</Heading>
        <Text style={text}>
          Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en Roomonitor. Haz clic en el siguiente botón para elegir una nueva contraseña.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Restablecer contraseña
        </Button>
        <Text style={footer}>
          Si no has solicitado un cambio de contraseña, puedes ignorar este mensaje. Tu contraseña no será modificada.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 25px' }
const logo = { margin: '0 0 24px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#2B2421', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#7E7269', lineHeight: '1.6', margin: '0 0 25px' }
const button = { backgroundColor: '#E8755A', color: '#ffffff', fontSize: '14px', borderRadius: '12px', padding: '12px 24px', textDecoration: 'none', fontWeight: 'bold' as const }
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
