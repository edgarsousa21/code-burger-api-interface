import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image.svg'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string('Digite seu nome completo!').required(
      'O seu nome é obrigatório!'
    ),
    email: Yup.string()
      .email('Digite um E-mail Válido!')
      .required('O E-mail é Obrigatório!'),
    password: Yup.string()
      .required('A Senha é Obrigatória!')
      .min(6, 'A senha deve ter pelo menos 6 dígitos!'),
    confirmPassword: Yup.string()
      .required('A Senha é Obrigatória!')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais!')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso!')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar!')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('falha no sistema! Tente novamente!')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ margin: '25px 0' }}>
            Sign up
          </Button>
        </form>

        <SignInLink>
          Já Possui Conta?{' '}
          <Link style={{ color: 'white' }} to="/Login">
            Sign In
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
