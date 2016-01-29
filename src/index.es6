'use strict'

import { has, chain, isNumber, isString } from 'lodash'
import { inpect } from 'util'
import Debug from 'debug'

let hbDebug = new Debug('libs-human2debug')
let counter = 0

export default function human2bytes(input) {
  if (!isString(input))
    throw new Error(`human2bytes: input must be a string!\
      \n\t input: ${inpect(input)}`)

  let hbId = counter++

  let size = chain(input)
    .thru(it => /^\s*(\d+\.?\d*)/.exec(it))
    .last()
    .toNumber()
    .value()
  let suff = chain(input)
    .thru(it => /^\s*\d+\.?\d*\s*(\w*)/.exec(it))
    .last()
    .value()

  let normSuff = has(suffMap, suff)
    ? suffMap[suff]
    : suff
  let coef = coefMap[normSuff]

  hbDebug(hbId, `input: ${input}\
    \n\t size: ${size}\
    \n\t suff: ${suff}\
    \n\t normSuff: ${normSuff}\
    \n\t coef: ${coef}`)

  if(!isNumber(coef))
    throw new Error(`human2bytes: unexpected size suffix!\
      \n\t input: ${input}\
      \n\t size: ${size}\
      \n\t suff: ${suff}`)

  return size * coef
}

let suffMap = {
  '': 'B',
  K: 'KB',
  M: 'MB',
  G: 'GB',
  T: 'TB',
  P: 'PB',
  E: 'EB',
  Z: 'ZB',
  Y: 'YB'
}

let b = 1/8
let coefMap = {
  b: 1*b,
  Kb: 1024*b,
  Mb: 1024*1024*b,
  Gb: 1024*1024*1024*b,
  Tb: 1024*1024*1024*1024*b,
  Pb: 1024*1024*1024*1024*1024*b,
  Eb: 1024*1024*1024*1024*1024*1024*b,
  Zb: 1024*1024*1024*1024*1024*1024*1024*b,
  Yb: 1024*1024*1024*1024*1024*1024*1024*1024*b,
  B: 1,
  KB: 1024,
  MB: 1024*1024,
  GB: 1024*1024*1024,
  TB: 1024*1024*1024*1024,
  PB: 1024*1024*1024*1024*1024,
  EB: 1024*1024*1024*1024*1024*1024,
  ZB: 1024*1024*1024*1024*1024*1024*1024,
  YB: 1024*1024*1024*1024*1024*1024*1024*1024
}
