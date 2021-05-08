require "test_helper"

class MemoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @memory = memories(:one)
  end

  test "should get index" do
    get memories_url, as: :json
    assert_response :success
  end

  test "should create memory" do
    assert_difference('Memory.count') do
      post memories_url, params: { memory: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show memory" do
    get memory_url(@memory), as: :json
    assert_response :success
  end

  test "should update memory" do
    patch memory_url(@memory), params: { memory: {  } }, as: :json
    assert_response 200
  end

  test "should destroy memory" do
    assert_difference('Memory.count', -1) do
      delete memory_url(@memory), as: :json
    end

    assert_response 204
  end
end
