import * as dateFunc from '@/utils/date'

describe('utils/date', () => {
  describe('convertToDate', () => {
    it('firebaseのtimestampがdate型になるか(正常系)', () => {
      const firebaseTimestamp = {
        seconds: 1556245884,
        nanoseconds: 0
      }

      expect(dateFunc.convertToDate(firebaseTimestamp)).toEqual(
        new Date(1556245884 * 1000)
      )
    })

    it('それ以外がdate型になるか(正常系)', () => {
      expect(dateFunc.convertToDate('1995-12-17T03:24:00')).toEqual(
        new Date('1995-12-17T03:24:00')
      )
    })

    it('空のときnullが変えるか', () => {
      expect(dateFunc.convertToDate()).toBeNull()
    })
  })

  describe('formatDate', () => {
    it('正しくフォーマットできるか', () => {
      expect(dateFunc.formatDate(new Date('1995-12-17T03:24:00'))).toBe(
        '1995-12-17'
      )

      expect(
        dateFunc.formatDate(new Date('1995-12-17T03:24:00'), 'yyyy-MM-dd')
      ).toBe('1995-12-17')

      expect(
        dateFunc.formatDate(new Date('1995-12-17T03:24:00'), 'yyyy-MM-dd HH:mm')
      ).toBe('1995-12-17 03:24')
    })

    it('date型以外のときnullがかえるか', () => {
      expect(
        dateFunc.formatDate('1995-12-17T03:24:00', 'yyyy-MM-dd HH:mm')
      ).toBeNull()
    })
  })
})
