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

interface MagicLinkEmailProps {
  siteName: string
  confirmationUrl: string
}

const LOGO_URL = 'https://mtbsuzhkxzhgmijeafnq.supabase.co/storage/v1/object/public/email-assets/roomonitor-logo.png'

export const MagicLinkEmail = ({
  siteName,
  confirmationUrl,
}: MagicLinkEmailProps) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>Tu enlace de acceso a Roomonitor</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={LOGO_URL} alt="Roomonitor" width="150" height="auto" style={logo} />
        <Heading style={h1}>Tu enlace de acceso</Heading>
        <Text style={text}>
          Haz clic en el siguiente botón para acceder a tu cuenta de Roomonitor. Este enlace caducará en breve.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Acceder a mi cuenta
        </Button>
        <Text style={footer}>
          Si no has solicitado este enlace, puedes ignorar este mensaje.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '40px 25px' }
const logo = { margin: '0 0 24px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#2B2421', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#7E7269', lineHeight: '1.6', margin: '0 0 25px' }
const button = { backgroundColor: '#E8755A', color: '#ffffff', fontSize: '14px', borderRadius: '12px', padding: '12px 24px', textDecoration: 'none', fontWeight: 'bold' as const }
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
