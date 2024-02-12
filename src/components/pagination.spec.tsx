import { render } from "@testing-library/react"
import { Pagination } from "./pagination"
import userEvent from "@testing-library/user-event"

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination 
        pageIndex={0} 
        perPage={10} 
        totalCount={200} 
        onPageChange={() => { }} 
      />
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 iten(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        perPage={10}
        totalCount={200}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página'
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })
})